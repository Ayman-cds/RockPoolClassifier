import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import {
    BottomText,
    ClassificationContainer,
    ClassificationImage,
    ClassificationTitle,
    Container,
    CoverageText,
    MiddleText,
    MiddleTextWrapper,
    ResponseTitle,
} from './RequestProcessedElements';
import LottieView from 'lottie-react-native';
import tick from '../../assets/responseAnimation.json';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NavType } from '../../../App';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../../firebase-config';
import { RockPool } from '../Camera/CameraModule';
import {
    ButtonText,
    CaptureButton,
} from '../StatusOverlay/StatusOverlayElements';

const RequestProcessed = () => {
    // const {
    //     params: { updateId, type },
    // } = useRoute();
    const animation = useRef(null);
    const navigation = useNavigation<NavType>();
    const [isClassified, setIsClassified] = useState(false);
    const [data, setData] = useState<RockPool>();
    useEffect(() => {
        // console.log('DATA ======>> ', updateId, type);
        // setTimeout(() => {
        //     navigation.navigate('Home');
        // }, 5000);
    }, []);

    const type = 'newPool';
    const updateId = 'NOJQyIbmw0a2Xb34KXAL';
    useEffect(() => {
        const unsub = onSnapshot(
            doc(
                db,
                type === 'newPool' ? 'RockPool' : 'RockPoolAddition',
                updateId
            ),
            (doc) => {
                const data: RockPool = doc.data();
                console.log('Current data: ', doc.data());
                setIsClassified(data.status === 'classified');
                setData(data);
            }
        );
    }, []);

    return (
        <Container>
            {!isClassified ? (
                <>
                    <ResponseTitle>Uploading rock pool data</ResponseTitle>
                    <LottieView
                        {...{
                            autoPlay: true,
                            ref: animation,
                            style: {
                                width: 300,
                                height: 300,
                            },
                            source: tick,
                            loop: false,
                        }}
                    />
                </>
            ) : (
                <>
                    <ClassificationContainer {...{ elevation: 19 }}>
                        <ClassificationTitle>
                            Rock pool classified!
                        </ClassificationTitle>
                        <ClassificationImage
                            {...{
                                style: {
                                    height: '50%',
                                },
                                source: {
                                    uri: data?.classifiedImage || '',
                                },
                            }}
                        />
                        <CoverageText>{data?.coverage}% Coverage </CoverageText>
                        <MiddleTextWrapper>
                            <MiddleText>
                                {data?.organisms.barnacles} Barnacles
                            </MiddleText>
                            <MiddleText>
                                {data?.organisms.oysters} Oysters
                            </MiddleText>
                        </MiddleTextWrapper>
                        <BottomText>{data?.organisms.algae}% Algae</BottomText>
                    </ClassificationContainer>
                    <CaptureButton
                        {...{
                            style: {
                                borderRadius: 20,
                                position: 'absolute',
                                bottom: 20,
                                backgroundColor: '#1da103f8',
                            },
                            onPress: () => navigation.navigate('Home'),
                        }}
                    >
                        <ButtonText> Go Home </ButtonText>
                    </CaptureButton>
                </>
            )}
        </Container>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        borderColor: 'transparent',
        height: '60%',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.7,
        shadowRadius: 1,
        shadowColor: '#000000',
        width: '90%',
        borderRadius: 10,
        elevation: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default RequestProcessed;
