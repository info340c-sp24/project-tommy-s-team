import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './index.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate('/todo'); 
    };

    return (
        <div className="login-body">
            <div className="login-box">
                <img src={require('./img/user2.jpeg')} alt="User icon" className="icon" />
                <form onSubmit={handleSubmit} className="login">
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
                </form>
            </div>
        </div>
    );
};

export default Login;
