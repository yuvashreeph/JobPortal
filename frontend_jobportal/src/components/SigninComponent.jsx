import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/AuthService'; // Adjust the path as necessary

const SigninComponent = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (username && password) {
            try {
                const response = await loginUser({ username, password });
                const user = response.data;
                const userRole = user.user_type;

                if (user) {
                    alert('Sign-in successful!');

                    if (userRole === 'admin') {
                        navigate('/admin-home');
                    } else if (userRole === 'recruiter') {
                        navigate('/recruiter-home');
                    } else if (userRole === 'jobseeker') {
                        navigate('/home');
                    }
                }
            } catch (error) {
                console.error('Login failed:', error);
                alert('Invalid credentials. Please try again.');
            }
        } else {
            alert('Please fill in all fields');
        }
    };

    return (
        <div className="container d-flex align-items-center justify-content-center vh-100">
            <div className="card" style={{ width: '25rem' }}>
                <div className="card-body">
                    <h2 className="card-title text-center">Sign In</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Username:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SigninComponent;
