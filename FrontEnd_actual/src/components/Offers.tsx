import React, { useState, useEffect } from "react";
import "./Dashboard.css"; // Reusing the same CSS file
import { useNavigate } from 'react-router-dom';

import searchIcon from '../assets/search.png';
import userImage from '../assets/user.png';

// Define the offer type
interface Offer {
  id: string;
  type: string;
  brand: string;
}

const Offers: React.FC = () => {
  const navigate = useNavigate();
  const [offers, setOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  // Simulate fetching offers data
  useEffect(() => {
    const fetchOffers = () => {
      setLoading(true);
      // Simulate API call delay
      setTimeout(() => {
        // Sample data - in a real app, this would come from an API
        const sampleOffers: Offer[] = [
          { id: 'offer-1', type: 'Fridge', brand: 'Brandt' },
          { id: 'offer-2', type: 'Washing Machine', brand: 'Condor' },
          { id: 'offer-3', type: 'Washing Machine', brand: 'Brandt' },
          { id: 'offer-4', type: 'Stove', brand: 'Condor' },
          { id: 'offer-5', type: 'Fridge', brand: 'Condor' },
          { id: 'offer-6', type: 'Stove', brand: 'Brandt' },
          { id: 'offer-7', type: 'Stove', brand: 'ENIEM' },
          { id: 'offer-8', type: 'Washing Machine', brand: 'Brandt' },
          { id: 'offer-9', type: 'Fridge', brand: 'beko' },
          { id: 'offer-10', type: 'Stove', brand: 'beko' },
          { id: 'offer-11', type: 'Fridge', brand: 'Condor' },
          { id: 'offer-12', type: 'Washing Machine', brand: 'ENIEM' },
          { id: 'offer-13', type: 'Stove', brand: 'beko' },
          { id: 'offer-14', type: 'Stove', brand: 'Brandt' },
          { id: 'offer-15', type: 'Washing Machine', brand: 'Condor' },
        ];
        setOffers(sampleOffers);
        setLoading(false);
      }, 500);
    };
    
    fetchOffers();
  }, []);
  
  const handleLoadMore = () => {
    setLoading(true);
    // Simulate loading more data
    setTimeout(() => {
      const moreOffers: Offer[] = [
        { id: `offer-${offers.length + 1}`, type: 'Fridge', brand: 'ENIEM' },
        { id: `offer-${offers.length + 2}`, type: 'Washing Machine', brand: 'Beko' },
        { id: `offer-${offers.length + 3}`, type: 'Stove', brand: 'Condor' },
        { id: `offer-${offers.length + 4}`, type: 'Fridge', brand: 'Brandt' },
        { id: `offer-${offers.length + 5}`, type: 'Washing Machine', brand: 'ENIEM' },
      ];
      setOffers([...offers, ...moreOffers]);
      setLoading(false);
    }, 300);
  };

  // Function to get brand logo color class
  const getBrandColorClass = (brand: string) => {
    switch (brand.toLowerCase()) {
      case 'brandt':
        return 'brand-red';
      case 'condor':
        return 'brand-blue';
      case 'eniem':
        return 'brand-navy';
      case 'beko':
        return 'brand-cyan';
      default:
        return '';
    }
  };
  
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="logo-container">
          <img
            src="src/assets/fennectron.png"
            alt="FenneCtron"
            className="logo"
          />
        </div>
        <nav className="sidebar-nav">
          <ul>
            <a onClick={() => navigate("/Dashboard")}><li className="nav-item">
              <span className="nav-icon">
                <img src="src/assets/dashb.png" />
              </span>
              <span className="nav-text">Dashboard</span>
            </li></a>
            <a onClick={() => navigate("/Stock")}><li className="nav-item">
              <span className="nav-icon">
                <img src="src/assets/stock.png" />
              </span>
              <span className="nav-text">Stock</span>
            </li></a>
            <a onClick={() => navigate("/Offers")}><li className="nav-item active">
              <span className="nav-icon">
                <img src="src/assets/offer.png" />
              </span>
              <span className="nav-text">Offers</span>
            </li></a>
            <a onClick={() => navigate("/")}><li className="nav-item">
              <span className="nav-icon">
                <img src="src/assets/login.png" />
              </span>
              <span className="nav-text">Login</span>
            </li></a>
            <a onClick={() => navigate("/SignUp")}><li className="nav-item">
              <span className="nav-icon">
                <img src="src/assets/register.png" />
              </span>
              <span className="nav-text">Register</span>
            </li></a>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <header className="dashboard-header">
          <div className="header-title">Offers - Exclusive deals from exceptional brands</div>
          <div className="header-actions">
            <div className="search-bar">
              <input type="text" placeholder="Search for a product..." />
              <span className="search-icon">
                <img src={searchIcon} alt="Search" />
              </span>
            </div>
            <div className="user-profile">
              <img src={userImage} alt="Admin" className="avatar" />
              <span className="user-name">Admin</span>
            </div>
          </div>
        </header>

        {/* Offers Grid */}
        <div className="offers-container">
          <div className="offers-grid">
            {offers.map((offer) => (
              <div 
                key={offer.id} 
                className="offer-item"
              >
                <div className="offer-content">
                  <div className="offer-type">{offer.type}</div>
                  <div className={`offer-brand ${getBrandColorClass(offer.brand)}`}>
                    {offer.brand}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {loading && (
            <div className="loading-indicator">
              <span>Loading...</span>
            </div>
          )}
          
          <div className="load-more-container">
            <button className="load-more-btn" onClick={handleLoadMore}>
              Load more
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="dashboard-footer">
          <div className="footer-copyright">
            © 2025{" "}
            <a className="fnx" href="#">
              FenneX Team
            </a>
          </div>
          <div className="footer-links">
            <a href="#" className="footer-link">
              FenneX Team
            </a>
            <a href="#" className="footer-link">
              About Us
            </a>
            <a href="#" className="footer-link">
              Blog
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Offers;