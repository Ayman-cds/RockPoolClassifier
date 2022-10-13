import { Camera as ImportedCamera, CameraType } from 'expo-camera';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
    Camera,
    CameraModuleContainer,
    CaptureButton,
    CaptureButtonContainer,
    ImagePreview,
    ViewFinder,
} from './CameraElements';

export default function CameraModule() {
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [showPreview, setShowPreview] = useState(false);
    const [mostRecentPhoto, setMostRecentPhoto] = useState();
    const [openCamera, setOpenCamera] = useState(false);
    if (!permission) {
        // Camera permissions are still loading
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: 'center' }}>
                    We need your permission to show the camera
                </Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    const toggleCameraType = () => {
        setType((current) =>
            current === CameraType.back ? CameraType.front : CameraType.back
        );
    };
    let camera: ImportedCamera | null;

    const takePicture = async () => {
        if (!camera) return;
        const photo = await camera.takePictureAsync();

        setMostRecentPhoto(photo.uri);
        console.log(photo);
        setOpenCamera(false);
    };
    return (
        <CameraModuleContainer>
            {mostRecentPhoto ? (
                <ImagePreview {...{ source: { uri: mostRecentPhoto } }} />
            ) : (
                <Camera
                    {...{
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
