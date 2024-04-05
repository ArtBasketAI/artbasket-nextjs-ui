// pages/_app.tsx
import '../styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { AuthProvider } from '../context/AuthContext';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
    return (
      <>
        <Head>
          {/* Responsive viewport meta tag */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div className="flex flex-col min-h-screen">
          <AuthProvider>
            <main className="flex-grow">
              <Component {...pageProps} />
            </main>
            <Footer />
          </AuthProvider>
        </div>
      </>
    );
}

export default MyApp;
