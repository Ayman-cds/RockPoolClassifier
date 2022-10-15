import { Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';
import { COLORS } from '../../styles/Colors';

import {
    useFonts,
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
} from '@expo-google-fonts/poppins';
export const DeliveryContainer = styled(View)`
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 20px;
    height: 70%;
`;

export const DeliveryDetails = styled(View)`
    width: 100%;
    /* border: 1px solid black; */
    justify-content: space-around;
    height: 10%;
    margin-bottom: 5px;
    flex-direction: row;
`;
export const PackageDetailsWrapper = styled(View)`
    display: flex;
    flex-direction: column;
    width: 60%;
    margin-left: 20px;
`;

// eg: "Package Delivery"
export const DeliveryTypeTitle = styled(Text)`
    color: ${COLORS.GREY};
    opacity: 0.7;
    font-family: Poppins-Light;
    margin: 0;
    font-size: 12px;
`;
export const DeliveryTypeName = styled(Text)`
    color: ${COLORS.GREY};
    font-size: 18px;
    font-family: Poppins-Medium;
    margin: 0;
`;
export const PackageWeight = styled(Text)`
    color: ${COLORS.GREY};
    font-family: Poppins-Light;
    font-size: 10px;
`;

export const EtaWrapper = styled(View)`
    display: flex;
    flex-direction: column;
`;
export const EtaTitle = styled(Text)`
    color: ${COLORS.GREY};
    font-family: Poppins-Light;
    font-size: 10px;
`;
export const EtaText = styled(Text)`
    color: green;
    font-family: Poppins-Medium;
    font-size: 18px;
`;

export const ContactUsButton = styled(TouchableOpacity)`
    background-color: green;
    width: 85%;
    height: 60px;
    border-radius: 10px;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
`;

export const ContactUsButtonText = styled(Text)`
    font-size: 18px;
    color: white;
`;
