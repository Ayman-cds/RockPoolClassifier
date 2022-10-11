import { View, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import CameraModule from '../Camera/CameraModule';
import { ApuLogo, HomeMain } from './HomeElements';
import APUlogo from '../../assets/APUlogo.png';

const Home = () => {
    return (
        <HomeMain
            {...{
                colors: ['#0e0571d0', '#0e05716d', '#0e0571d0'],
            }}
        >
            <ApuLogo {...{ source: APUlogo }} />
            <CameraModule />
        </HomeMain>
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
        backgroundColor: '#0E0571',
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
