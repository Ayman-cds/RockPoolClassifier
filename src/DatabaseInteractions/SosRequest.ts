import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';

export interface SosRequest {
    location: {
        lat: number;
        lng: number;
    };
    imageUrl: string;
    status: 'Pending' | 'Completed' | 'InProcess';
}
export const uploadNewSosRequest = async (req: SosRequest) => {
    try {
        await addDoc(collection(db, 'SosRequest'), req);
        console.log('request uploaded');
    } catch (error) {
        console.error('Error while uploading Request');
    }
};
