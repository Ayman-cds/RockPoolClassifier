import { View, Text, Linking } from 'react-native';
import React from 'react';
import {
    ContactUsButton,
    ContactUsButtonText,
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const DeliveryStatus = ({ cancelRequest }: { cancelRequest: () => void }) => {
    const contactNum = '97455846615';
    const navigation = useNavigation();

    return (
        <DeliveryContainer>
            <View
                {...{
                    style: {
                        height: 100,
                    },
                }}
            >
                <ProgressSteps {...{ activeStep: 2 }}>
                    <ProgressStep
                        {...{
                            removeBtnRow: true,
                            label: 'Processing',
                        }}
                    ></ProgressStep>

                    <ProgressStep
                        {...{
                            nextBtnDisabled: true,
                            removeBtnRow: true,
                            previousBtnStyle: true,
                            label: 'Pick Up',
                        }}
                    ></ProgressStep>
                    <ProgressStep
                        {...{
                            nextBtnDisabled: true,
                            removeBtnRow: true,
                            previousBtnStyle: true,
                            label: 'Delivered',
                        }}
                    ></ProgressStep>
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
            <ContactUsButton
                {...{
                    onPress: () => {
                        Linking.openURL(
                            `http://api.whatsapp.com/send?phone=${contactNum}`
                        );
                    },
                    onLongPress: cancelRequest,
                }}
            >
                <ContactUsButtonText>Contact Us</ContactUsButtonText>
            </ContactUsButton>
        </DeliveryContainer>
    );
};

export default DeliveryStatus;
