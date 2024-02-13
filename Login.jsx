import React, { useState } from 'react';
import './Login.css';

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
    <div className="login-container">
        <div className="login-card">
        <div className="login-form">
        <h2>Login</h2>
        <form>
          <label>
            Username
            <input
              type="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="button" onClick={handleLogin}>
            Login   
          </button>
        </form>
      </div>
        </div>
      
      <div className="login-sidebar">
        <h3>Welcome To Smart Fishing!</h3>
        <p>
          <center>
          To keep connected with us please login with your personal info.
          </center>
        </p>
      </div>
    </div>
);
};

export default Login;
