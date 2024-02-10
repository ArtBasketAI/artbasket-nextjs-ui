import { useState } from 'react';

interface LoginFormProps {
    onLoginSuccess: () => void; // Callback function to be called on successful login
}

export const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        // TODO: Implement the actual login logic here
        // This is where you would call your backend API

        console.log('Login attempt with:', { username, password });

        // Mock successful login
        onLoginSuccess();
    };

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input className="login-input" id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />

            <label htmlFor="password">Password:</label>
            <input className="login-input" id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

            <button className="login-button" type="submit">Login</button>
        </form>
    );
};
