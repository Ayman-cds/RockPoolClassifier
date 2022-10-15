import React, { useRef } from 'react';
import LottieView from 'lottie-react-native';
import packageDrone from '../../assets/droneFlying4.json';
import searchingDrone from '../../assets/droneFlying3.json';
import { ViewStyle } from 'react-native';

const Drone = ({
    droneType,
    style,
}: {
    droneType: 'package' | 'search';
    style?: ViewStyle;
}) => {
    const animation = useRef(null);

    return (
        <LottieView
            {...{
                autoPlay: true,
                ref: animation,
                style: {
                    width: 180,
                    height: 180,
                    ...style,
                },
                source: droneType === 'package' ? packageDrone : searchingDrone,
            }}
        />
    );
};

export default Drone;
