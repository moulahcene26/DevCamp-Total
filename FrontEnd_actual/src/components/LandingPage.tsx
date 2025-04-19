import React from 'react';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="landing-page">
      <header className="header">
        <div className="search-container">
          <input type="text" placeholder="Search for a product" className="search-input" />
        </div>
        <div className="user-profile">
          <div className="profile-image">
            <img src="src/assets/user.png" alt="Admin" />
          </div>
          <span className="admin-text">Admin</span>
        </div>
      </header>

      <main className="main_content">
        <div className="forecast-container">
          <h1 className="heading">Boost Your Sales with AI-Powered Forecasting</h1>
          <p className="description">
            Our advanced AI solution is designed to help you make smarter business decisions. By
            automatically analyzing key product data—such as category, price, brand, seasonality,
            and historical trends—it predicts how many units of each item are likely to sell over a
            given period. This allows you to optimize inventory levels, reduce overstock or
            shortages, and plan your marketing strategies more effectively. With real-time
            predictions and continuous learning from new data, you'll gain a competitive edge and
            maximize profitability.
          </p>
          <div className="action-button-container">
            <button className="predict-button" onClick={() => navigate("/stock")}>Predict Now</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;