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
        <DroneSection>
            <LottieView
                autoPlay={true}
                ref={animation}
                style={{
                    width: 290,
                    height: 290,
                    alignSelf: 'center',
                    opacity: 0.7,
                }}
                source={require('../../assets/droneFlying4.json')}
            />
        </DroneSection>
    );
};

export default Drone;
