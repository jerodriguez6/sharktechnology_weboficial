import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const Login = {
                email,
                password
            };
            await axios.post('/logg/register', Login);
            alert('User registered');
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return (
        <div className="container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="mt-3"></div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
            <div className="mt-3">
                <p>Already have an account?</p>
                <Link to="/login" className="btn btn-secondary">Log in</Link>
            </div>
        </div>
    );
};

export default Register;