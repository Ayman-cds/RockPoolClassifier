import { Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';

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
    color: #939393;
    font-size: 25px;
    font-family: Poppins-Light;
    margin-left: 45px;
`;
export const InfoWrapper = styled(View)`
    margin-top: 20px;
`;
export const Info = styled(Text)`
    color: #c0c0c0;
    font-size: 15px;
    font-family: Poppins-Light;
    margin-left: 45px;
    margin-top: 8px;
`;
export const DroneWrapper = styled(View)`
    width: 40%;
`;
export const SosButton = styled(TouchableOpacity)`
    width: 85%;
    border-radius: 10px;
    background-color: #c70d03;
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
