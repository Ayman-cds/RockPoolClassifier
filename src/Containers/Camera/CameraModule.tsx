import { Camera, CameraType } from 'expo-camera';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SosButton, SOSText } from './CameraElements';

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

    function toggleCameraType() {
        setType((current) =>
            current === CameraType.back ? CameraType.front : CameraType.back
        );
    }
    let camera: Camera;

    const takePicture = async () => {
        if (!camera) return;
        const photo = await camera.takePictureAsync();
        setMostRecentPhoto(photo.uri);
        setOpenCamera(false);
    };
    return (
        <View style={styles.container}>
            {/* {
                showPreview && (
                    
                )
            } */}
            {openCamera ? (
                <Camera
                    style={styles.camera}
                    type={type}
                    ref={(r) => {
                        camera = r;
                    }}
                >
                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            flexDirection: 'row',
                            flex: 1,
                            width: '100%',
                            padding: 20,
                            justifyContent: 'space-between',
                        }}
                    >
                        <View
                            style={{
                                alignSelf: 'center',
                                flex: 1,
                                alignItems: 'center',
                            }}
                        >
                            <TouchableOpacity
                                onPress={takePicture}
                                style={{
                                    width: 70,
                                    height: 70,
                                    bottom: 0,
                                    borderRadius: 50,
                                    backgroundColor: '#fff',
                                }}
                            />
                        </View>
                    </View>
                </Camera>
            ) : (
                <SosButton>
                    <SOSText>SOS</SOSText>
                </SosButton>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '50%',
        justifyContent: 'center',
        border: 10,
        borderColor: 'black',
    },
    camera: {
        flex: 1,
        width: '100%',
        border: 14,
        borderColor: 'blue',
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    sosButton: {
        width: 130,
        borderRadius: 4,
        backgroundColor: '#c70d03',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
    },
});
