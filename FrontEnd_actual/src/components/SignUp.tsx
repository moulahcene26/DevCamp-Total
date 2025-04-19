import React, { useState } from 'react';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';

interface SignUpProps {
  onSignUp?: (formData: any) => void;
  onLogin?: () => void;
}

const SignUp: React.FC<SignUpProps> = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: '',
    businessType: '',
    registrationNumber: '',
    country: '',
    email: '',
    phone: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  return (
    <div className="signup-container">
      <div className="signup-image-section">
      <div className='NavBar'>
            <a href='/' className="active">Home</a>
            <a href='/aboutus'>About Us</a>
            <a href='#'>Blog</a>
            <a href='/pricing' >Pricing</a>
          </div>
        <img src="src/assets/home_appliances.png" alt="Home Appliances" className="home-appliances-image" />
      </div>
      <div className="signup-form-section">
        <div className="logo-container">
          <a href='#'><img src="src/assets/fennectron.png" alt="FenneCtron" className="logo" /></a>
        </div>
        
        <h1 className="signup-title">Your AI Gate To Customizable<br />Home Electronics Management</h1>
        
        <p className="signup-welcome">Create your account to get started.</p>
        
        <form>
          <div className="form-section">
            <div className="form-row">
              <div className="input-group">
                <label htmlFor="companyName" className="sr-only">Company Name</label>
                <input
                  id="companyName"
                  type="text"
                  className="form-input"
                  placeholder="Company Name"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="input-group">
                <label htmlFor="businessType" className="sr-only">Business Type</label>
                <input
                  id="businessType"
                  type="text"
                  className="form-input"
                  placeholder="Business Type"
                  value={formData.businessType}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="registrationNumber" className="sr-only">Company Registration Number</label>
              <input
                id="registrationNumber"
                type="text"
                className="form-input"
                placeholder="Company Registration Number"
                value={formData.registrationNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="country" className="sr-only">Country</label>
              <input
                id="country"
                type="text"
                className="form-input"
                placeholder="Country"
                value={formData.country}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="email" className="sr-only">Email Address</label>
              <input
                id="email"
                type="email"
                className="form-input"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="phone" className="sr-only">Phone Number</label>
              <input
                id="phone"
                type="tel"
                className="form-input"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
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
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <label>
              <input type="checkbox" className="checkbox" required /> I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
            </label>
            
            <div className="button-group">
              <button type="button" className="login-button" onClick={() => navigate("/Dashboard")}>Login</button>
              <button type="button" className="signup-button" onClick={() => navigate("/landing")}>Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;