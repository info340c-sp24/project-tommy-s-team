import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './index.css';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState(''); // Declare confirmPassword here
    const navigate = useNavigate(); 

    const handleToggle = () => {
        setIsLogin(!isLogin);
        setUsername('');
        setPassword('');
        setConfirmPassword(''); // Reset confirmPassword when toggling
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        // Add authentication logic here

        // For demonstration, we'll just navigate to the todo page
        navigate('/todo');
    };

    const handleSignupSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const response = await fetch('/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const result = await response.json();

            if (result.success) {
                alert('Signup successful');
                setIsLogin(true);
            } else {
                alert('Signup failed: ' + result.message);
            }
        } catch (error) {
            alert('An error occurred: ' + error.message);
        }
    };

    return (
        <div className="login-body">
            <div className="login-box">
                <img src={require('./img/user2.jpeg')} alt="User icon" className="icon" />
                {isLogin ? (
                    <form onSubmit={handleLoginSubmit} className="login">
                        <div className="username-input">
                            <label htmlFor="username">Username:</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="password-input">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="login-button">Login</button>
                        <p>
                            Don't have an account? <button type="button" onClick={handleToggle} className="toggle-button">Sign Up</button>
                        </p>
                    </form>
                ) : (
                    <form onSubmit={handleSignupSubmit} className="signup">
                        <div className="username-input">
                            <label htmlFor="username">Username:</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="password-input">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="confirm-password-input">
                            <label htmlFor="confirmPassword">Confirm Password:</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="login-button">Sign Up</button>
                        <p>
                            Already have an account? <button type="button" onClick={handleToggle} className="toggle-button">Login</button>
                        </p>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Login;
