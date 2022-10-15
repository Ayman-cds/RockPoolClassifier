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

const Drone = () => {
    const animation = useRef(null);

    return (
        <LottieView
            autoPlay={true}
            ref={animation}
            style={{
                width: 180,
                height: 180,
            }}
            source={require('../../assets/droneFlying4.json')}
        />
    );
};

export default Drone;
