// pages/index.tsx
import { useRouter } from 'next/router';
import Login from '../components/Login';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';

const Home = () => {
    const router = useRouter();
    const { login } = useAuth();

    const handleLoginSuccess = async (email: string, password: string) => {
        try {
            await login(email, password);
            console.log('Logged in user:', email);
            router.push('/dashboard');
        } catch (error) {
            console.error('Login error:', error);
            // Handle login error
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
                <Login onLoginSuccess={handleLoginSuccess} />
            </div>
        </>
    );
};


export default Home;
