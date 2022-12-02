import { Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';
import {
    useFonts,
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
import { COLORS } from '../../styles/Colors';

export const StatusContainer = styled(View)`
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 20px;
    height: 40%;
`;
export const InfoAndDrone = styled(View)`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    height: 60%;
`;
export const InfoContainer = styled(View)`
    width: 72%;
`;

export const StatusTitle = styled(Text)`
    color: ${COLORS.GREY};
    font-size: 20px;
    font-family: Poppins-Light;
    margin-left: 45px;
`;
export const InfoWrapper = styled(View)`
    margin-top: 20px;
`;
export const Info = styled(Text)`
    color: #c0c0c0;
    font-size: 14px;
    font-family: Poppins-Light;
    margin-left: 45px;
    margin-top: 8px;
`;
export const DroneWrapper = styled(View)`
    width: 40%;
`;
export const CaptureButton = styled(TouchableOpacity)`
    width: 85%;
    border-radius: 10px;
    background-color: green;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 55px;
    align-self: center;
`;

export const SOSText = styled(Text)`
    color: #fff;
    font-weight: bold;
    text-align: center;
`;
