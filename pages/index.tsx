// pages/index.tsx
import { useRouter } from 'next/router';
import Login from '../components/Login';
import Navbar from '../components/Navbar';
import { signInWithEmailPassword } from '../config/auth';

const Home = () => {
    const router = useRouter();

    const handleLoginSuccess = (user) => {
        console.log('Logged in user:', user);
        router.push('/dashboard');
    };

    const handleEmailPasswordLogin = async (email, password) => {
        try {
            const user = await signInWithEmailPassword(email, password);
            handleLoginSuccess(user);
        } catch (error) {
            console.error('Login error:', error);
            // Optionally, set an error message state here to display in the UI
        }
    };

    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center min-h-screen">
                <div className="max-w-md mr-10">
                    <h1 className="text-4xl font-bold text-center">Welcome to ArtBasketAI</h1>
                    <p className="text-center mt-4">Your co-pilot for streamlining content creation.</p>
                </div>
                <Login onEmailPasswordLogin={handleEmailPasswordLogin} onLoginSuccess={handleLoginSuccess} />
            </div>
        </>
    );
};

export default Home;
