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
    CaptureButtonWrapper,
    NewPoolBtn,
    UpdatePoolBtn,
} from './StatusOverlayElements';
import Drone from '../Drone/Drone';
import { useNavigation } from '@react-navigation/native';
import { NavType } from '../../../App';

const StatusOverlay = () => {
    const navigation = useNavigation<NavType>();

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
            <CaptureButtonWrapper>
                <NewPoolBtn
                    {...{ onPress: () => navigation.navigate('NewRockPool') }}
                >
                    <ButtonText>New Pool</ButtonText>
                </NewPoolBtn>

                <UpdatePoolBtn
                    {...{
                        onPress: () => navigation.navigate('RockPoolAddition'),
                    }}
                >
                    <ButtonText>Update Pool</ButtonText>
                </UpdatePoolBtn>
            </CaptureButtonWrapper>
        </StatusContainer>
    );
};

export default StatusOverlay;
