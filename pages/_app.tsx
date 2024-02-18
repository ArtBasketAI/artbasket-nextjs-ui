// pages/_app.tsx
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AuthProvider } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <AuthProvider>
            <Navbar />
            <main>
                <Component {...pageProps} />
            </main>
            <Footer />
            </AuthProvider>
        </>
    );
}

export default MyApp;
