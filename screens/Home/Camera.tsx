import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Camera as CameraImport, CameraType } from 'expo-camera';

const Camera = () => {
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = CameraImport.useCameraPermissions();

    const onPressSendImage = async () => {
        requestPermission();
        console.log(permission);
    };

    return (
        <View {...{ style: styles.mainContainer }}>
            <CameraImport {...{ type }}></CameraImport>
            <TouchableOpacity
                {...{ style: styles.sendImage, onPress: onPressSendImage }}
            >
                <Text {...{ style: styles.buttonText }}>Send Image</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: '100%',
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sendImage: {
        backgroundColor: 'grey',
        height: 80,
        borderRadius: 20,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
    },
});
export default Camera;
