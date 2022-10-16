import { View, Text } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { Container, ResponseTitle } from './RequestProcessedElements';
import LottieView from 'lottie-react-native';
import tick from '../../assets/responseAnimation.json';
import { useNavigation } from '@react-navigation/native';

const RequestProcessed = () => {
    const animation = useRef(null);
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home');
        }, 5000);
    }, []);

    return (
        <Container>
            <ResponseTitle>
                Your request has been received and help is on the way!
            </ResponseTitle>
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
        </Container>
    );
};

export default RequestProcessed;
