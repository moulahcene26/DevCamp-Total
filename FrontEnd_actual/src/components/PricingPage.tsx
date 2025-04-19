// PricingPage.tsx
import React from 'react';
import './PricingPage.css';
import { useNavigate } from 'react-router-dom';
import fennectronLogo from '../assets/fennectron.png';
import appliancesIllustration from '../assets/price.png';
// Import check icon placeholder
// import checkIcon from '../assets/check.png';

const PricingPage: React.FC = () => {
  const navigate = useNavigate();
  
  const plans = [
    {
      name: "Basic",
      price: "Free",
      features: [
        { name: "10 predictions per months", included: true },
        { name: "10GB Cloud Storage", included: true },
        { name: "AI Recommendations", included: false },
        { name: "Packs recommendations", included: false },
        { name: "Customer Support", included: false },
        { name: "Priority Generations", included: false }
      ]
    },
    {
      name: "Premium",
      price: "20,000 DA",
      features: [
        { name: "Illimited predictions", included: true },
        { name: "AI Recommendations", included: true },
        { name: "Packs recommendations", included: true },
        { name: "Customer Support", included: true },
        { name: "100GB Cloud Storage", included: true },
        { name: "Priority Generations", included: true }
      ]
    }
  ];

  return (
    <div className="pricing-container">
      <div className="pricing-content">
        <div className="pricing-info-section">
          <div className="logo-container">
            <a href='/'><img src={fennectronLogo} alt="FenneCtron" className="logo" /></a>
          </div>
          
          <div className="pricing-plans-container">
            {plans.map((plan, index) => (
              <div key={index} className="pricing-plan-card">
                <h3 className="plan-name">{plan.name}</h3>
                <h2 className="plan-price">{plan.price}</h2>
                
                <div className="features-list">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="feature-item">
                      {/* Use different class based on whether feature is included */}
                      <img 
                        src="src/assets/check.png" 
                        alt={feature.included ? "✓" : "✗"}
                        className={`feature-icon-img ${!feature.included ? 'not-included' : ''}`}
                      />
                      <span className={`feature-name ${!feature.included ? 'not-included-text' : ''}`}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
                
                <button className="get-started-button" onClick={() => navigate("/signup")}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
        
        <div className="pricing-image-section">
          <div className='NavBar'>
            <a href='/'>Home</a>
            <a href='/aboutus'>About Us</a>
            <a href='#'>Blog</a>
            <a href='/pricing' className="active">Pricing</a>
          </div>
          <img src={appliancesIllustration} alt="Home Appliances" className="appliances-illustration" />
        </div>
      </div>
    </div>
  );
};

export default PricingPage;