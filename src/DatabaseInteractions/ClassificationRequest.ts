import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RockPool, RockPoolAddition } from '../Containers/Camera/CameraModule';
export interface imageUpload {
    location: {
        lat: number;
        lng: number;
    };
    imageUrl: string;
}
const storeData = async (currentRequestId: string) => {
    try {
        await AsyncStorage.setItem('currentSosRequest', currentRequestId);
        console.log('request saved ');
    } catch (error) {
        // saving error
        console.error(error);
    }
};

export const uploadNewRockPool = async (req: RockPool) => {
    try {
        const response = await addDoc(collection(db, 'RockPool'), req);
        console.log('request uploaded, response ==>>', response.id);
        return response.id;
    } catch (error) {
        console.error('Error while uploading Request');
    }
};

export const uploadNewRockPoolUpdate = async (req: RockPoolAddition) => {
    try {
        const response = await addDoc(collection(db, 'RockPoolAddition'), req);
        console.log('request uploaded, response ==>>', response.id);
        return response.id;
    } catch (error) {
        console.error('Error while uploading Request');
    }
};