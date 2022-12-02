import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useRef } from 'react';
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

const RequestProcessed = () => {
    // const {
    //     params: { updateId, type },
    // } = useRoute();
    // const animation = useRef(null);
    // const navigation = useNavigation<NavType>();
    // useEffect(() => {
    //     console.log('DATA ======>> ', updateId, type);
    //     // setTimeout(() => {
    //     //     navigation.navigate('Home');
    //     // }, 5000);
    // }, []);

    // useEffect(() => {
    //     const unsub = onSnapshot(
    //         doc(
    //             db,
    //             type === 'newPool' ? 'RockPool' : 'RockPoolAddition',
    //             updateId
    //         ),
    //         (doc) => {
    //             console.log('Current data: ', doc.data());
    //         }
    //     );
    // }, []);

    return (
        <Container>
            {/* <ResponseTitle>Uploading rock pool data</ResponseTitle> */}
            {/* <LottieView
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
            /> */}
            {/* <View
                {...{
                    style: styles.mainContainer,
                }}
            > */}
            <ClassificationContainer {...{ elevation: 19 }}>
                <ClassificationTitle>Rock pool classified!</ClassificationTitle>
                <ClassificationImage
                    {...{
                        source: {
                            uri: 'https://firebasestorage.googleapis.com/v0/b/oceanhack-75cd2.appspot.com/o/0573bdfd-2ddb-4282-ad24-1dad41d661c7.jpg?alt=media&token=de7aecf4-cb4b-4c80-a64c-cc8a5e3e45cf',
                        },
                    }}
                />
                <CoverageText> Coverage 78%</CoverageText>
                <MiddleTextWrapper>
                    <MiddleText>7 Barnacles</MiddleText>
                    <MiddleText>3 Oysters</MiddleText>
                </MiddleTextWrapper>
                <BottomText>36% Algae</BottomText>
            </ClassificationContainer>
            {/* </View> */}
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
