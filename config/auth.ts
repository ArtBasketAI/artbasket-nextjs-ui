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

export const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
        const result = await firebase.auth().signInWithPopup(provider);
        return result.user;
    } catch (error) {
        throw error;
    }
};

export const signInWithFacebook = async () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    try {
        const result = await firebase.auth().signInWithPopup(provider);
        return result.user;
    } catch (error) {
        throw error;
    }
};

export const signInWithApple = async () => {
    const provider = new firebase.auth.OAuthProvider('apple.com');
    try {
        const result = await firebase.auth().signInWithPopup(provider);
        return result.user;
    } catch (error) {
        throw error;
    }
};