import { View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import {
    NewRockPoolContainer,
    RockPoolNameInput,
    RockPoolTitle,
} from './NewRockPoolElements';
import {
    ButtonText,
    CaptureButton,
} from '../StatusOverlay/StatusOverlayElements';
import { useNavigation } from '@react-navigation/native';
import { NavType } from '../../../App';

const NewRockPool = () => {
    const navigation = useNavigation<NavType>();
    const [name, setName] = useState<string>('');
    const toggleCamera = () => {
        navigation.navigate('Camera', {
            additionType: 'newRockPool',
            rockPoolId: null,
            rockPoolName: name,
        });
    };

    return (
        <NewRockPoolContainer>
            <RockPoolTitle>Add new rock pool</RockPoolTitle>
            <RockPoolNameInput
                {...{
                    placeholder: 'Name',
                    onChangeText: (text: string) => setName(text),
                }}
            />
            <CaptureButton
                {...{
                    onPress: toggleCamera,

                    disabled: name == '',
                    style: { opacity: name == '' ? 0.5 : 1 },
                }}
            >
                <ButtonText>Add Image</ButtonText>
            </CaptureButton>
        </NewRockPoolContainer>
    );
};

export default NewRockPool;
