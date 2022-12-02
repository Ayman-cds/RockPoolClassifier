import { View, Text } from 'react-native';
import React from 'react';
import {
    DroneWrapper,
    Info,
    InfoAndDrone,
    InfoContainer,
    InfoWrapper,
    CaptureButton,
    ButtonText,
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
                    <StatusTitle>Benthic Marine organisms near you</StatusTitle>
                    <InfoWrapper>
                        <Info {...{ style: { color: 'green' } }}>
                            Straits Quay Penang: 40,000 organisms
                        </Info>
                        <Info>E&O Hotel: 40,000 organisms</Info>
                        <Info>Karpal Singh Drive: 60,000 organisms</Info>
                    </InfoWrapper>
                </InfoContainer>
                <DroneWrapper>
                    <Drone {...{ droneType: 'package' }} />
                </DroneWrapper>
            </InfoAndDrone>
            <CaptureButton {...{ onPress: toggleCamera }}>
                <ButtonText>Capture</ButtonText>
            </CaptureButton>
        </StatusContainer>
    );
};

export default StatusOverlay;
