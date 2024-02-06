import React, { useState } from 'react';

const Login = ({ onLogin }) => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const handleLogin = () => {
    // You can add authentication logic here (e.g., API call, check credentials)
    // For simplicity, let's just check if username and password are not empty
    if (username && password) {
    onLogin(username);
    } else {
    alert('Please enter both username and password.');
    }
};

return (
    <div>
    <h2>Login</h2>
    <form>
        <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
        Login
        </button>
    </form>
    </div>
);
};

export default Login;
