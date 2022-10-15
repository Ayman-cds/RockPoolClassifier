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
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

const DeliveryStatus = () => {
    return (
        <DeliveryContainer>
            <View
                {...{
                    style: {
                        height: 100,
                    },
                }}
            >
                <ProgressSteps>
                    <ProgressStep
                        label="Processing"
                        {...{
                            removeBtnRow: true,
                        }}
                    ></ProgressStep>

                    <ProgressStep
                        {...{
                            nextBtnDisabled: true,
                            removeBtnRow: true,
                            previousBtnStyle: true,
                        }}
                        label="Pick Up"
                    ></ProgressStep>
                    <ProgressStep label="Delivered"></ProgressStep>
                </ProgressSteps>
            </View>
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
