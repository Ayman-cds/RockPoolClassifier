import { View, Text } from 'react-native';
import React from 'react';
import {
    DroneWrapper,
    Info,
    InfoAndDrone,
    InfoContainer,
    InfoWrapper,
    SosButton,
    SOSText,
    StatusContainer,
    StatusTitle,
} from './StatusOverlayElements';
import Drone from '../Drone/Drone';
import { useNavigation } from '@react-navigation/native';

const StatusOverlay = () => {
    const navigation = useNavigation();

    const toggleCamera = () => {
        navigation.navigate('Camera');
    };
    return (
        <StatusContainer>
            <InfoAndDrone>
                <InfoContainer>
                    <StatusTitle>No Active Requests</StatusTitle>
                    <InfoWrapper>
                        <Info {...{ style: { color: 'green' } }}>
                            Drone status: Ready
                        </Info>
                        <Info>Location: Ready</Info>
                        <Info>Weather: Stable</Info>
                    </InfoWrapper>
                </InfoContainer>
                <DroneWrapper>
                    <Drone {...{ droneType: 'package' }} />
                </DroneWrapper>
            </InfoAndDrone>
            <SosButton {...{ onPress: toggleCamera }}>
                <SOSText>SOS</SOSText>
            </SosButton>
        </StatusContainer>
    );
};

export default StatusOverlay;
