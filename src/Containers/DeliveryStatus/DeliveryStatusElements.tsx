import { Text, View } from 'react-native';
import styled from 'styled-components';
import { COLORS } from '../../styles/Colors';
export const DeliveryContainer = styled(View)`
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 20px;
    height: 70%;
`;

export const DeliveryDetails = styled(View)`
    width: 100%;
    height: 20%;
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
