import { Camera as ImportedCamera, CameraType } from 'expo-camera';
import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Button, Text, View } from 'react-native';
import {
    Camera,
    CameraModuleContainer,
    CaptureButton,
    CaptureButtonContainer,
    ImagePreview,
    ImagePreviewContainer,
    ViewFinder,
} from './CameraElements';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../../../firebase-config';
import {
    imageUpload,
    uploadNewRockPool,
    uploadNewRockPoolUpdate,
} from '../../DatabaseInteractions/ClassificationRequest';
import { useNavigation, useRoute } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import loadingAnimation from '../../assets/loading.json';
import { NavType } from '../../../App';
import * as Location from 'expo-location';

export interface RockPool {
    name: string;
    organisms: {
        barnacles: null | number;
        oysters: null | number;
        algae: null | number;
    } | null;
    coverage: number | null;
    location: {
        lat: number;
        lng: number;
    };
    image: string;
    classifiedImage: string | null;
    status: 'unclassified' | 'classified';
}
export interface RockPoolAddition {
    rockPoolId: string;
    organisms: {
        barnacles: null | number;
        oysters: null | number;
        algae: null | number;
    } | null;
    date: Date;
    image: string;
    classifiedImage: string | null;
    status: 'unclassified' | 'classified';
}

export default function CameraModule() {
    const {
        params: { additionType, rockPoolId, rockPoolName },
    } = useRoute();

    useEffect(() => {
        console.log(additionType, rockPoolId, rockPoolName);
    }, []);
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [mostRecentPhoto, setMostRecentPhoto] = useState<string | null>(null);
    const [exit, setExit] = useState<boolean>(false);
    const navigation = useNavigation<NavType>();
    let camera: ImportedCamera | null;
    const [loading, setLoading] = useState<boolean>(false);
    const animation = useRef(null);

    const [showPool, setShowPool] = useState<RockPool>();
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);

            const text = JSON.stringify(location);
            console.log(text);
        })();
    }, []);

    useEffect(() => {
        if (!permission) {
            // Camera permissions are still loading
            return <View />;
        }

        if (!permission.granted) {
            // Camera permissions are not granted yet
            return (
                <View>
                    <Text style={{ textAlign: 'center' }}>
                        We need your permission to show the camera
                    </Text>
                    <Button
                        onPress={requestPermission}
                        title="grant permission"
                    />
                </View>
            );
        }
    }, []);

    const takePicture = async () => {
        if (!camera) return;
        setLoading(true);
        const photo = await camera.takePictureAsync();

        setMostRecentPhoto(photo.uri);
        console.log(photo);
        if (additionType == 'newRockPool') {
            newRockPool(photo.uri);
        } else {
            newRockPoolUpdate(photo.uri);
        }
        setLoading(false);
    };

    const getImageBlob = async (imageUrl: string) => {
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        return blob;
    };
    const newRockPool = async (photoUri: string) => {
        let imageName = photoUri.substring(photoUri.lastIndexOf('/') + 1);
        console.log(imageName);
        const reference = ref(storage, imageName);
        const imageBlob = await getImageBlob(photoUri);
        try {
            await uploadBytes(reference, imageBlob);
            const downloadURL = await getDownloadURL(reference);
            const request: RockPool = {
                location: {
                    lat: location.coords.latitude,
                    lng: location.coords.longitude,
                },
                image: downloadURL,
                classifiedImage: null,
                coverage: null,
                name: rockPoolName,
                status: 'unclassified',
                organisms: null,
            };
            console.log(downloadURL);
            const newId = await uploadNewRockPool(request);
            setExit(true);
            if (newId) {
                navigation.navigate('ResponsePage', {
                    updateId: newId,
                    type: 'newPool',
                });
            } else {
                console.log(
                    'NO NEW ID WAS RETURNED "CameraModule > newRockPool()"'
                );
            }
        } catch (error) {
            console.error(error);
        }
    };

    const newRockPoolUpdate = async (photoUri: string) => {
        let imageName = photoUri.substring(photoUri.lastIndexOf('/') + 1);
        console.log(imageName);
        const reference = ref(storage, imageName);
        const imageBlob = await getImageBlob(photoUri);
        try {
            await uploadBytes(reference, imageBlob);
            const downloadURL = await getDownloadURL(reference);
            const request: RockPoolAddition = {
                rockPoolId,
                organisms: null,
                date: new Date(),
                image: downloadURL,
                classifiedImage: null,
                status: 'unclassified',
            };
            console.log(downloadURL);
            const newId = await uploadNewRockPoolUpdate(request);
            setExit(true);
            if (newId) {
                navigation.navigate('ResponsePage', {
                    updateId: newId,
                    type: 'newPoolUpdate',
                });
            } else {
                console.log(
                    'NO NEW ID WAS RETURNED "CameraModule > newRockPool()"'
                );
            }
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <CameraModuleContainer>
            {mostRecentPhoto ? (
                <ImagePreviewContainer>
                    <ImagePreview {...{ source: { uri: mostRecentPhoto } }} />
                    <ActivityIndicator
                        {...{ size: 'large', style: { marginTop: 40 } }}
                    />
                </ImagePreviewContainer>
            ) : (
                <Camera
                    {...{
                        ratio: '16:9',
                        type,
                        ref: (r) => {
                            camera = r;
                        },
                    }}
                >
                    <ViewFinder>
                        <CaptureButtonContainer>
                            <CaptureButton {...{ onPress: takePicture }} />
                        </CaptureButtonContainer>
                    </ViewFinder>
                </Camera>
            )}
        </CameraModuleContainer>
    );
}
