// context/AuthContext.tsx
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import firebase from '../config/firebase';

interface AuthContextType {
    isLoggedIn: boolean;
    user: firebase.User | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState<firebase.User | null>(null);

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((currentUser) => {
            setIsLoggedIn(!!currentUser);
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    const login = async (email: string, password: string) => {
        const result = await firebase.auth().signInWithEmailAndPassword(email, password);
        setUser(result.user);
    };

    const logout = async () => {
        await firebase.auth().signOut();
        setIsLoggedIn(false);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
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

export const AuthContext = createContext<AuthContextType | null>(null);
