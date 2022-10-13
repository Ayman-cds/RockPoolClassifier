import { View, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import CameraModule from '../Camera/CameraModule';
import { ApuLogo, HomeMain, Map, MapContainer } from './HomeElements';
import APUlogo from '../../assets/APUlogo.png';
import { Marker } from 'react-native-maps';
import Drone from '../Drone/Drone';
import { getFirestore, setDoc, doc } from 'firebase/firestore';
import { db } from '../../../firebase-config';

const Home = () => {
    const fbTest = async () => {
        await setDoc(doc(db, 'characters', 'mario'), {
            employment: 'plumber',
            outfitColor: 'red',
            specialAttack: 'fireball',
        });
    };
    useEffect(() => {
        fbTest();
    }, []);
    
    return (
        <HomeMain
            {...{
                colors: ['#0e0571fc', '#0e0571a4'],
            }}
        >
            <ApuLogo />
            <MapContainer>
                <Map
                    {...{
                        style: { borderRadius: 20 },
                        initialRegion: {
                            latitude: 3.0554177828101743,
                            longitude: 101.70051905834995,
                            latitudeDelta: 0.13,
                            longitudeDelta: 0.13,
                        },
                    }}
                >
                    <Marker
                        {...{
                            coordinate: {
                                latitude: 3.0554177828101743,
                                longitude: 101.70051905834995,
                            },
                        }}
                    />
                </Map>
            </MapContainer>
            <Drone />
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
