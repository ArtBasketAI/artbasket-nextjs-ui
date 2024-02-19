import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import firebase from '../config/firebase'; // Adjust the import path based on your project structure
import { signInWithEmailPassword } from '../config/auth'; // Adjust the import path based on your project structure

interface AuthContextType {
    isLoggedIn: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            setIsLoggedIn(!!user);
        });
        return () => unsubscribe();
    }, []);

    const login = async (email: string, password: string) => {
        await signInWithEmailPassword(email, password);
    };

    const logout = async () => {
        await firebase.auth().signOut();
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === null) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
