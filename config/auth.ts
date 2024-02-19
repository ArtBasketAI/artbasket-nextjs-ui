// config/auth.ts
import firebase from './firebase';

export const signInWithEmailPassword = async (email: string, password: string) => {
    try {
        const result = await firebase.auth().signInWithEmailAndPassword(email, password);
        return result;
    } catch (error) {
        throw error;
    }
};
