// pages/index.tsx
import { useRouter } from 'next/router';
import Login from '../components/Login';
import { useAuth } from '../context/AuthContext';

const Home = () => {
    const router = useRouter();
    const { login } = useAuth();

    const handleLoginSuccess = (user) => {
        // Perform the login action
        login();
        // Redirect to dashboard or handle logged-in user
        console.log('Logged in user:', user);
        router.push('/dashboard');
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="max-w-md mr-10">
                <h1 className="text-4xl font-bold text-center">Welcome to ArtBasketAI</h1>
                <p className="text-center mt-4">Your co-pilot for streamlining content creation.</p>
            </div>
            <Login onLoginSuccess={handleLoginSuccess} />
        </div>
    );
};

export default Home;
