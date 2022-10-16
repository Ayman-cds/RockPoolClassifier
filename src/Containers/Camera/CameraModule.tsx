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
import { ref, uploadBytes } from 'firebase/storage';
import { storage } from '../../../firebase-config';
import {
    SosRequest,
    uploadNewSosRequest,
} from '../../DatabaseInteractions/SosRequest';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import loadingAnimation from '../../assets/loading.json';

export default function CameraModule() {
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [mostRecentPhoto, setMostRecentPhoto] = useState<string | null>(null);
    const [exit, setExit] = useState<boolean>(false);
    const navigation = useNavigation();
    let camera: ImportedCamera | null;
    const [loading, setLoading] = useState<boolean>(false);
    const animation = useRef(null);
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
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    const takePicture = async () => {
        if (!camera) return;
        setLoading(true);
        const photo = await camera.takePictureAsync();

        setMostRecentPhoto(photo.uri);
        console.log(photo);
        uploadImage(photo.uri);
        setLoading(false);
    };

    const getImageBlob = async (imageUrl: string) => {
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        return blob;
    };
    const uploadImage = async (photoUri: string) => {
        let imageName = photoUri.substring(photoUri.lastIndexOf('/') + 1);
        console.log(imageName);
        const reference = ref(storage, imageName);
        const imageBlob = await getImageBlob(photoUri);
        try {
            await uploadBytes(reference, imageBlob);
            const request: SosRequest = {
                location: {
                    lat: 0,
                    lng: 0,
                },
                imageUrl: reference.fullPath,
                status: 'Processing',
            };
            await uploadNewSosRequest(request);
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
