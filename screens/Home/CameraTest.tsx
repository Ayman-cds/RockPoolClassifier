import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CameraTest() {
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
        console.log(photo);
    };
    return (
        <View style={styles.container}>
            {
                showPreview && (
                    
                )
            }
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
                <TouchableOpacity
                    onPress={() => setOpenCamera(true)}
                    style={{
                        width: 130,
                        borderRadius: 4,
                        backgroundColor: '#14274e',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 40,
                    }}
                >
                    <Text
                        style={{
                            color: '#fff',
                            fontWeight: 'bold',
                            textAlign: 'center',
                        }}
                    >
                        Take picture
                    </Text>
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '50%',
        justifyContent: 'center',
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
});
