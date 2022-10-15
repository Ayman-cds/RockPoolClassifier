import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';
import AsyncStorage from '@react-native-async-storage/async-storage';
export interface SosRequest {
    location: {
        lat: number;
        lng: number;
    };
    imageUrl: string;
    status: 'Processing' | 'PickedUp' | 'Delivered';
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

export const uploadNewSosRequest = async (req: SosRequest) => {
    try {
        const response = await addDoc(collection(db, 'SosRequest'), req);
        console.log('request uploaded, response ==>>', response.id);
        storeData(response.id);
    } catch (error) {
        console.error('Error while uploading Request');
    }
};
