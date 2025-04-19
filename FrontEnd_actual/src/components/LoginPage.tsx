// LoginPage.tsx
import React, { useState } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';
import fennectronLogo from '../assets/fennectron.png';
import homeAppliancesImage from '../assets/home_appliances.png';

interface LoginPageProps {
  onLogin?: (email: string, password: string) => void;
  onSignUp?: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin, onSignUp }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onLogin) {
      onLogin(email, password);
    }
  };

  const handleSignUp = () => {
    if (onSignUp) {
      onSignUp();
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-form-section">
          <div className="logo-container">
            <a href='#'><img src={fennectronLogo} alt="FenneCtron" className="logo" /></a>
          </div>
          
          <h1 className="login-title">Your AI Gate To Customizable<br />Home Electronics Management</h1>
          
          <p className="login-welcome">Welcome back! Please login to your account.</p>
          
          <form onSubmit={handleSubmit}>
            <div className="form-section">
              <div className="input-group">
                <label htmlFor="email" className="sr-only">Email Address</label>
                <input
                  id="email"
                  type="email"
                  className="form-input"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className="input-group">
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  type="password"
                  className="form-input"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              
              <div className="form-actions">
                <div className="remember-me">
                  <input
                    id="remember"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label htmlFor="remember">Remember Me</label>
                </div>
                
                <a href="#" className="forgot-password">Forgot Password?</a>
              </div>
              
              <div className="button-group">
                <button type="button" className="login-button" onClick={() => navigate("/landing")}>Login</button>
                <button type="button" className="signup-button" onClick={() => navigate("/signup")}>Sign Up</button>
              </div>
            </div>
          </form>
        </div>
        
        <div className="login-image-section">
        <div className='NavBar'>
            <a href='/' className="active">Home</a>
            <a href='/aboutus'>About Us</a>
            <a href='#'>Blog</a>
            <a href='/pricing' >Pricing</a>
          </div>
          <img src={homeAppliancesImage} alt="Home Appliances" className="home-appliances-image" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;