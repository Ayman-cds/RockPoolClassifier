import { View, Text, TextInput } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import React, { useEffect, useState } from 'react';
import {
    NewRockPoolContainer,
    Picker,
    RockPoolNameInput,
    RockPoolTitle,
} from './RockPoolAdditionElements';
import {
    ButtonText,
    CaptureButton,
} from '../StatusOverlay/StatusOverlayElements';
import { useNavigation } from '@react-navigation/native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase-config';

const RockPoolAddition = () => {
    const navigation = useNavigation();
    const toggleCamera = () => {
        navigation.navigate('Camera', {
            additionType: 'rockPoolUpdate',
            rockPoolId: value,
            rockPoolName: null,
        });
    };

    useEffect(() => {
        getAllRockPools();
    }, []);

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState<{ label: string; value: string }[]>([]);
    const getAllRockPools = async () => {
        const colRef = collection(db, 'RockPool');
        const docsSnap = await getDocs(colRef);
        const allRockPools: { label: string; value: string }[] = [];
        docsSnap.docs.forEach((pool) => {
            const poolData = pool.data();
            const item = { label: poolData.name, value: pool.id };
            allRockPools.push(item);
        });
        setItems(allRockPools);
        console.log(allRockPools);
    };

    return (
        <NewRockPoolContainer>
            <RockPoolTitle>Update Rock Pool</RockPoolTitle>
            <Picker
                {...{
                    open,
                    value,
                    items,
                    setOpen,
                    setValue,
                    setItems,
                    textStyle: { color: '#363636' },
                    zIndex: 3000,
                    zIndexInverse: 1000,
                    searchPlaceholder: 'Search...',
                    searchContainerStyle: {
                        borderBottomColor: 'white',
                    },
                    searchTextInputStyle: {
                        borderColor: '#939393',
                    },
                    dropDownContainerStyle: {
                        height: 150,
                        width: '90%',
                        borderWidth: 0,
                        borderRadius: 10,
                        alignSelf: 'center',
                    },
                }}
            />
            <CaptureButton {...{ onPress: toggleCamera }}>
                <ButtonText>Add Image</ButtonText>
            </CaptureButton>
        </NewRockPoolContainer>
    );
};

export default RockPoolAddition;
