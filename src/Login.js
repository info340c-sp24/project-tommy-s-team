import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './index.css';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate(); 
    const auth = getAuth(); // Get the auth instance

    const handleToggle = () => {
        setIsLogin(!isLogin);
        setFullName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
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
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log('User created:', user);

            alert('Signup successful');
            setIsLogin(true); // Switch to login view after successful signup
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
                        <div className="email-input">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                        <div className="full-name-input">
                            <label htmlFor="fullName">Full Name:</label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="email-input">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                        <button type="submit" className="signup-button">Sign Up</button>
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
