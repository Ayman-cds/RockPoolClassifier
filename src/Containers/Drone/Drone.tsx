import { View, Text } from 'react-native';
import React, { useRef } from 'react';
import {
    DroneContainer,
    DroneImage,
    DroneInfo,
    DroneInfoContainer,
    DroneInfoTitle,
    DroneSection,
    InfoWrapper,
    SectionTitle,
} from './DroneElements';
import LottieView from 'lottie-react-native';
import packageDrone from '../../assets/droneFlying4.json';
import searchingDrone from '../../assets/droneFlying3.json';

const Drone = ({ droneType }: { droneType: 'package' | 'search' }) => {
    const animation = useRef(null);

    return (
        <LottieView
            {...{
                autoPlay: true,
                ref: animation,
                style: {
                    width: 180,
                    height: 180,
                },
                source: droneType === 'package' ? packageDrone : searchingDrone,
            }}
        />
    );
};


export default Drone;
