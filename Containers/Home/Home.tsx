import { View, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import CameraModule from '../Camera/CameraModule';

const Home = () => {
    return (
        <View {...{ style: styles.mainContainer }}>
            <CameraModule />
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
export default Home;
