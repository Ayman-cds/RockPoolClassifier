import { Text, TextInput, View } from 'react-native';
import styled from 'styled-components';

export const NewRockPoolContainer = styled(View)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;
export const RockPoolTitle = styled(Text)`
    font-size: 30px;
    font-weight: bold;
    text-align: center;
`;
export const RockPoolNameInput = styled(TextInput)`
    border: 1px solid black;
    border-radius: 10px;
    width: 85%;
    height: 50px;
    margin: 50px 0px;
    padding: 10px;
`;
