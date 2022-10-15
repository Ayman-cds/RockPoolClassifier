import { Image, Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';
import { LinearGradient } from 'expo-linear-gradient';
import APULogo from '../../assets/APUlogo.png';

import MapView from 'react-native-maps';
export const HomeMain = styled(LinearGradient)`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: space-around;
    flex-direction: column;
`;

export const ApuLogo = styled(Image).attrs({
    source: APULogo,
})`
    align-self: center;
    margin-top: 40px;
    height: 65px;
    width: 217px;
`;

export const MapContainer = styled(View)`
    display: flex;
    width: 100%;
    height: 80%;
    border: 1px solid black;
    border-radius: 10px;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    align-self: center;
    margin-top: 30px;
`;
export const Map = styled(MapView)`
    width: 105%;
    height: 135%;
    align-self: center;
`;
export const SosButton = styled(TouchableOpacity)`
    width: 85%;
    border-radius: 10px;
    background-color: #c70d03;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 50px;
    align-self: center;
`;

export const SOSText = styled(Text)`
    color: #fff;
    font-weight: bold;
    text-align: center;
`;
