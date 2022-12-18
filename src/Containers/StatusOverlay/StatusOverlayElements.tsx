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
    height: 50%;
`;
export const InfoAndDrone = styled(View)`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    height: 50%;
`;
export const InfoContainer = styled(View)`
    margin-top: 10px;
    width: 100%;
    height: 40%;
`;
export const Wrapper = styled(View)`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    width: 100%;
`;

export const StatusTitle = styled(Text)`
    color: ${COLORS.GREY};
    font-size: 20px;
    font-family: Poppins-Light;
    margin-left: 45px;
    text-align: center;
`;
export const InfoWrapper = styled(View)`
    height: 100%;
    width: 40%;
`;
export const Info = styled(Text)`
    color: #c0c0c0;
    font-size: 14px;
    font-family: Poppins-Light;
    margin-left: 45px;
    margin-top: 8px;
`;
export const ImageWrapper = styled(View)`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
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

export const CaptureButtonWrapper = styled(View)`
    position: absolute;
    width: 100%;
    bottom: 100px;
    flex-direction: row;
    justify-content: space-around;
`;
export const NewPoolBtn = styled(TouchableOpacity)`
    width: 45%;
    border-radius: 10px;
    background-color: #a16900;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 55px;
    align-self: center;
`;

export const UpdatePoolBtn = styled(TouchableOpacity)`
    width: 45%;
    border-radius: 10px;
    background-color: green;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 55px;
    align-self: center;
`;
export const ButtonText = styled(Text)`
    color: #fff;
    font-weight: bold;
    text-align: center;
`;
