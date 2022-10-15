import { View, Text } from 'react-native';
import React from 'react';
import {
    DeliveryContainer,
    DeliveryDetails,
    DeliveryTypeName,
    DeliveryTypeTitle,
    EtaText,
    EtaTitle,
    EtaWrapper,
    PackageDetailsWrapper,
    PackageWeight,
} from './DeliveryStatusElements';
import Drone from '../Drone/Drone';

const DeliveryStatus = () => {
    return (
        <DeliveryContainer>
            <Drone
                {...{
                    droneType: 'search',
                    style: {
                        width: 220,
                        height: 220,
                        alignSelf: 'center',
                    },
                }}
            />
            <DeliveryDetails>
                <PackageDetailsWrapper>
                    <DeliveryTypeTitle>Package Delivery</DeliveryTypeTitle>
                    <DeliveryTypeName>Medical Supplies</DeliveryTypeName>
                    <PackageWeight>4.5kg</PackageWeight>
                </PackageDetailsWrapper>
                <EtaWrapper>
                    <EtaTitle>Estimated Time</EtaTitle>
                    <EtaText>5 mins</EtaText>
                </EtaWrapper>
            </DeliveryDetails>
        </DeliveryContainer>
    );
};

export default DeliveryStatus;
