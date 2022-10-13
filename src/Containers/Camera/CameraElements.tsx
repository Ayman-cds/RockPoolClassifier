import { Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';

export const CameraModuleContainer = styled(View)`
    width: 100%;
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
