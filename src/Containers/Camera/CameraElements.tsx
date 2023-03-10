import { Image, Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';
import { Camera as CameraImport, CameraType } from 'expo-camera';

export const CameraModuleContainer = styled(View)`
    /* background-color: black; */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const Camera = styled(CameraImport)`
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: 10px;
`;

export const ViewFinder = styled(View)`
    display: flex;
    position: absolute;
    bottom: 0;
    flex-direction: row;
    justify-content: space-between;
`;

export const CaptureButtonContainer = styled(View)`
    display: flex;
    justify-content: center;
    width: 100%;
    align-self: center;
    align-items: center;
    margin-bottom: 30px;
`;
export const CaptureButton = styled(TouchableOpacity)`
    width: 70px;
    height: 70px;
    bottom: 0;
    border-radius: 50px;
    background-color: #fff;
`;

export const ImagePreviewContainer = styled(View)`
    width: 100%;
    height: 100%;
    display: flex;
    /* justify-content: space-around; */
    /* align-items: center; */
    background-color: black;
`;

export const ImagePreview = styled(Image)`
    margin-top: 30px;
    width: 100%;
    height: 80%;
    border-radius: 10px;
`;
