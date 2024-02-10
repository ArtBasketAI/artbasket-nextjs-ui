import { LoginForm } from '../components/auth/LoginForm'; // Assuming LoginForm is already styled or will use global styles
import { useRouter } from 'next/router';

export default function LoginPage() {
    const router = useRouter();

    const handleLoginSuccess = () => {
        router.push('/dashboard'); // Redirect on successful login
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h1>Login</h1>
                <LoginForm onLoginSuccess={handleLoginSuccess} />
                {/* LoginForm needs to follow the same pattern of using global styles */}
            </div>
        </div>
    );
}
