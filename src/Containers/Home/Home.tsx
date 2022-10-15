import { StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { HomeMain, Map, MapContainer } from './HomeElements';
import { Marker } from 'react-native-maps';
import { setDoc, doc } from 'firebase/firestore';
import { db } from '../../../firebase-config';
import StatusOverlay from '../StatusOverlay/StatusOverlay';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DeliveryStatus from '../DeliveryStatus/DeliveryStatus';

const Home = () => {
    const [activeTaskId, setActiveTaskId] = useState<null | string>(null);

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('currentSosRequest');
            if (value !== null) {
                // value previously stored
                setActiveTaskId(value);
                console.log('currentTaskId', value);
            }
        } catch (error) {
            console.error(error);
            // error reading value
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <HomeMain
            {...{
                colors: ['#000', '#050136e9', '#050136e9', '#050136e9', '#000'],
            }}
        >
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
            {activeTaskId ? <DeliveryStatus /> : <StatusOverlay />}
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
