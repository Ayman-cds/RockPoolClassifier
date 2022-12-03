import { View, Text } from 'react-native';
import React from 'react';
import {
    ImageWrapper,
    Info,
    InfoAndDrone,
    InfoContainer,
    InfoWrapper,
    CaptureButton,
    ButtonText,
    StatusContainer,
    StatusTitle,
    CaptureButtonWrapper,
    NewPoolBtn,
    UpdatePoolBtn,
    Wrapper,
} from '../StatusOverlay/StatusOverlayElements';
import Drone from '../Drone/Drone';
import { useNavigation } from '@react-navigation/native';
import { NavType } from '../../../App';
import { RockPool } from '../Camera/CameraModule';
import { ClassificationImage } from '../RequestProcessed/RequestProcessedElements';

const ShowPool = ({ pool }: { pool: RockPool }) => {
    const navigation = useNavigation<NavType>();

    return (
        <StatusContainer>
            <InfoContainer>
                <StatusTitle>{pool.name}</StatusTitle>
                <Wrapper>
                    {pool.organisms ? (
                        <InfoWrapper>
                            <Info {...{ style: { color: 'green' } }}>
                                Coverage: {pool.coverage}%
                            </Info>
                            <Info>Barnacles:{pool.organisms?.barnacles}</Info>
                            <Info>Oysters: {pool.organisms?.oysters}</Info>
                            <Info>Algae: {pool.organisms?.algae}%</Info>
                        </InfoWrapper>
                    ) : null}
                    <ImageWrapper>
                        <ClassificationImage
                            {...{
                                source: { uri: pool.classifiedImage || '' },
                            }}
                        />
                    </ImageWrapper>
                </Wrapper>
            </InfoContainer>
            <CaptureButtonWrapper>
                <NewPoolBtn
                    {...{ onPress: () => navigation.navigate('NewRockPool') }}
                >
                    <ButtonText>New Pool</ButtonText>
                </NewPoolBtn>

                <UpdatePoolBtn
                    {...{
                        onPress: () => navigation.navigate('RockPoolAddition'),
                    }}
                >
                    <ButtonText>Update Pool</ButtonText>
                </UpdatePoolBtn>
            </CaptureButtonWrapper>
        </StatusContainer>
    );
};

export default ShowPool;
