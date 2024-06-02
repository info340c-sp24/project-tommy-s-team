import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './index.css';
import { auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';


const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        
        try {
            

            alert('Signup successful');
            navigate('/login');
        } catch (error) {
            alert('An error occurred: ' + error.message);
        }
    };

    return (
        <div className="signup-body">
            <div className="signup-box">
                <img src={require('./img/user2.jpeg')} alt="User icon" className="icon" />
                <form onSubmit={handleSubmit} className="signup">
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

                    <button type="submit" className="signup-button">Signup</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
