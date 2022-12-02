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

export interface RockPool {
    name: string;
    organisms: string[];
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
    newOrganisms: string[];
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
    const navigation = useNavigation();
    let camera: ImportedCamera | null;
    const [loading, setLoading] = useState<boolean>(false);
    const animation = useRef(null);

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
        newRockPoolUpdate(photo.uri);
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
                    lat: 0,
                    lng: 0,
                },
                image: downloadURL,
                classifiedImage: null,
                coverage: null,
                name: rockPoolName,
                status: 'unclassified',
                organisms: [],
            };
            console.log(downloadURL);
            await uploadNewRockPool(request);
            setExit(true);
            navigation.navigate('ResponsePage');
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
                newOrganisms: [],
                date: new Date(),
                image: downloadURL,
                classifiedImage: null,
                status: 'unclassified',
            };
            console.log(downloadURL);
            await uploadNewRockPoolUpdate(request);
            setExit(true);
            navigation.navigate('ResponsePage');
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
