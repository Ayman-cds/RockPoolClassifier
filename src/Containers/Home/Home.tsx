import { StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { HomeMain, Map, MapContainer } from './HomeElements';
import { Marker } from 'react-native-maps';
import { onSnapshot, collection } from 'firebase/firestore';
import { db } from '../../../firebase-config';
import StatusOverlay from '../StatusOverlay/StatusOverlay';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DeliveryStatus from '../DeliveryStatus/DeliveryStatus';
import { useIsFocused } from '@react-navigation/native';
import { RockPool } from '../Camera/CameraModule';
import ShowPool from '../ShowPool/ShowPool';
import * as Location from 'expo-location';

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
    const [pools, setPools] = useState<RockPool[]>();
    useEffect(() => {
        const unsub = onSnapshot(collection(db, 'RockPool'), (collection) => {
            const pools = collection.docs.map((snap) => ({ ...snap.data() }));
            console.log('Current data: ', pools);
            setPools(pools);
        });
    }, []);

    const [showPool, setShowPool] = useState<RockPool>();
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }
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
                    {pools
                        ? pools.map((pool, k) => {
                              if (pool.status === 'classified') {
                                  return (
                                      <Marker
                                          {...{
                                              key: k,
                                              coordinate: {
                                                  latitude: pool.location.lat,
                                                  longitude: pool.location.lng,
                                              },
                                              onPress: () => setShowPool(pool),
                                          }}
                                      />
                                  );
                              } else {
                                  return null;
                              }
                          })
                        : null}
                </Map>
            </MapContainer>
            {showPool ? (
                <ShowPool {...{ pool: showPool }} />
            ) : (
                <StatusOverlay />
            )}
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
