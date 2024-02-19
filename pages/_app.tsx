// pages/_app.tsx
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AuthProvider } from '../context/AuthContext';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className="flex flex-col min-h-screen">
            <AuthProvider>
                <main className="flex-grow">
                    <Component {...pageProps} />
                </main>
                <Footer />
            </AuthProvider>
        </div>
    );
}

export default MyApp;
