import { Image, Text, View } from 'react-native';
import styled from 'styled-components';
import Drone from '../../assets/Drone.png';
export const DroneContainer = styled(View)`
    display: flex;
    flex-direction: column;
    width: 100%;
    /* height: 50%; */
    background-color: rgba(255, 255, 255, 1);
    border-radius: 30px;
    margin: 20px;
    align-self: center;
    align-items: center;
`;

export const SectionTitle = styled(Text)`
    font-size: 18px;
    color: white;
    text-align: center;
    height: 20%;
    margin-top: 10px;
`;

export const DroneSection = styled(View)`
    display: flex;
    height: 70%;
    flex-direction: row;
`;
export const DroneImage = styled(Image).attrs({
    source: Drone,
})`
    width: 100px;
    justify-self: center;
    align-self: center;
    height: 100px;
`;

export const DroneInfoContainer = styled(View)`
    display: flex;
    height: 100%;
    width: 20%;
    justify-content: space-around;
`;

export const InfoWrapper = styled(View)`
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const DroneInfoTitle = styled(Text)`
    color: white;
    font-size: 15px;
`;
export const DroneInfo = styled(Text)`
    color: #54ff18;
    font-size: 15px;
`;
