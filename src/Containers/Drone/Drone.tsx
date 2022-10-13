import { View, Text } from 'react-native';
import React from 'react';
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

const Drone = () => {
    return (
        <DroneContainer>
            <SectionTitle>
                First Aid Kit & Medical Supplies Incoming{' '}
            </SectionTitle>
            <DroneSection>
                <DroneInfoContainer>
                    <InfoWrapper>
                        <DroneInfoTitle>Motor 1</DroneInfoTitle>
                        <DroneInfo>80%</DroneInfo>
                    </InfoWrapper>

                    <InfoWrapper>
                        <DroneInfoTitle>Motor 2</DroneInfoTitle>
                        <DroneInfo>80%</DroneInfo>
                    </InfoWrapper>
                </DroneInfoContainer>
                <DroneImage />
                <DroneInfoContainer>
                    <InfoWrapper>
                        <DroneInfoTitle>Motor 3</DroneInfoTitle>
                        <DroneInfo>80%</DroneInfo>
                    </InfoWrapper>
                    <InfoWrapper>
                        <DroneInfoTitle>Motor 1</DroneInfoTitle>
                        <DroneInfo>80%</DroneInfo>
                    </InfoWrapper>
                </DroneInfoContainer>
            </DroneSection>
        </DroneContainer>
    );
};

export default Drone;
