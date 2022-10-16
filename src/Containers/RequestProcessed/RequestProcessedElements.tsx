import { Text, View } from 'react-native';
import styled from 'styled-components';
import { COLORS } from '../../styles/Colors';

export const Container = styled(View)`
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
`;

export const ResponseTitle = styled(Text)`
    font-size: 18px;
    text-align: center;
    color: ${COLORS.GREY};
    width: 80%;
`;
