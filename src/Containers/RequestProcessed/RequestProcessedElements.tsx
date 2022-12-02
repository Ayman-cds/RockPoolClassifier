import { Image, Text, View } from 'react-native';
import styled from 'styled-components';
import { COLORS } from '../../styles/Colors';
import { Card } from 'react-native-shadow-cards';

export const Container = styled(View)`
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
`;

export const ResponseTitle = styled(Text)`
    font-size: 18px;
    text-align: center;
    width: 80%;
`;

export const ClassificationContainer = styled(Card)`
    display: flex;
    height: 60%;
    width: 85%;
    padding: 20px;
    border-radius: 20px;
    align-items: center;
    /* border: 1px solid black; */
`;
export const Shadow = styled(View)``;
export const ClassificationTitle = styled(Text)`
    font-size: 24px;
    text-align: center;
    color: #5d5c5c;
    margin: 15px 0;
`;

export const ClassificationImage = styled(Image)`
    width: 90%;
    border-radius: 20px;
    height: 50%;
    margin: 10px;
`;

export const MiddleTextWrapper = styled(View)`
    flex-direction: row;
    display: flex;
    justify-content: space-around;
    margin: 10px 0;
    width: 100%;
`;
export const MiddleText = styled(Text)`
    font-size: 15px;
    padding: 10px;
    width: 45%;
    text-align: center;
    background-color: #faaeae5f;
    border-radius: 20px;
`;
export const BottomText = styled(Text)`
    font-size: 20px;
    padding: 10px;
    width: 95%;
    margin: 10px 0;
    text-align: center;
    background-color: #b7faae97;
    border-radius: 20px;
`;
export const CoverageText = styled(Text)`
    font-size: 20px;
    color: #5d5c5c;
    font-weight: bold;
    text-align: center;
`;
