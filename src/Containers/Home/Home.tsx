import { StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { HomeMain, Map, MapContainer } from './HomeElements';
import { Marker } from 'react-native-maps';
import { setDoc, doc } from 'firebase/firestore';
import { db } from '../../../firebase-config';
import StatusOverlay from '../StatusOverlay/StatusOverlay';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DeliveryStatus from '../DeliveryStatus/DeliveryStatus';
import { useIsFocused } from '@react-navigation/native';

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
    const isFocused = useIsFocused();

    useEffect(() => {
        getData();
    }, [isFocused]);

    const cancelRequest = async () => {
        try {
            await AsyncStorage.removeItem('currentSosRequest');
            setActiveTaskId(null);
            console.log('item removed ');
        } catch (error) {
            // saving error
            console.error(error);
        }
    };

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
                            latitude: 5.395866,
                            longitude: 100.328082,
                            latitudeDelta: 0.13,
                            longitudeDelta: 0.13,
                        },
                    }}
                >
                    <Marker
                        {...{
                            coordinate: {
                                latitude: 5.395866,
                                longitude: 100.328082,
                            },
                        }}
                    />

                    <Marker
                        {...{
                            coordinate: {
                                latitude: 5.458444,
                                longitude: 100.313829,
                            },
                        }}
                    />

                    <Marker
                        {...{
                            coordinate: {
                                latitude: 5.423673,
                                longitude: 100.336011,
                            },
                        }}
                    />
                </Map>
            </MapContainer>
            <StatusOverlay />
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
