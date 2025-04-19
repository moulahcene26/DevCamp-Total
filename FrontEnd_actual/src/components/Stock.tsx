import React, { useState, useEffect } from "react";
import "./Dashboard.css"; // Reusing the same CSS file
import ProductFormModal from "./ProductFormModal"; // Import the modal component
import ProductDetailsModal from "./ProductDetailsModal"; // Import the details modal
import { useNavigate } from 'react-router-dom';

import searchIcon from '../assets/search.png';
import userImage from '../assets/user.png';

const Stock: React.FC = () => {
  const navigate = useNavigate();
  const [stocks, setStocks] = useState<Array<{id: string, code: string}>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  
  // Simulate fetching stock data from database
  useEffect(() => {
    const fetchStocks = () => {
      setLoading(true);
      // Simulate API call delay
      setTimeout(() => {
        // Create sample data - in real app, this would be an API call
        const sampleStocks = Array(15).fill(null).map((_, index) => ({
          id: `stock-${index + 1}`,
          code: '0001'
        }));
        setStocks(sampleStocks);
        setLoading(false);
      }, 500);
    };
    
    fetchStocks();
  }, []);
  
  const handleLoadMore = () => {
    setLoading(true);
    // Simulate loading more data
    setTimeout(() => {
      const moreStocks = Array(5).fill(null).map((_, index) => ({
        id: `stock-${stocks.length + index + 1}`,
        code: '0001'
      }));
      setStocks([...stocks, ...moreStocks]);
      setLoading(false);
    }, 300);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveProduct = (productData: any) => {
    console.log("New product data:", productData);
    // Here you would typically make an API call to save the product
    // Then refresh the stock list
    
    // For demo, let's just add a new stock item with the ID
    const newStock = {
      id: `stock-${stocks.length + 1}`,
      code: productData.id || '0001'
    };
    
    setStocks([...stocks, newStock]);
  };

  const handleProductClick = (product: any) => {
    // In a real app, you would fetch the full product details from an API
    // For demo, we'll create some sample data
    const productDetails = {
      id: product.id,
      brand: "Sample Brand",
      week: "Week 25",
      date: "2023-06-15",
      totalPrice: 45000,
      predictionSoldUnits: 120,
      aiRecommendations: "Based on current market trends, we recommend increasing the price by 5% and focusing on online advertising channels. The product shows strong potential in the upcoming season."
    };
    
    setSelectedProduct(productDetails);
    setIsDetailsModalOpen(true);
  };

  const closeDetailsModal = () => {
    setIsDetailsModalOpen(false);
    setSelectedProduct(null);
  };
  
  return (
    <>
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
            <a onClick={() => navigate("/Stock")}><li className="nav-item active">
              <span className="nav-icon">
                <img src="src/assets/stock.png" />
              </span>
              <span className="nav-text">Stock</span>
            </li></a>
            <a onClick={() => navigate("/Offers")}><li className="nav-item ">
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
            <div className="header-title">Stock - Available products in stock !</div>
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

          <div className="cnt">
          <div className="es">
            <button className="product-button" onClick={openModal}>Add a product</button>
          </div> 
          <div className="stock-grid-container">
            <div className="stock-grid">
              {stocks.map((stock) => (
                <div 
                  key={stock.id} 
                  className="stock-item"
                  onClick={() => handleProductClick(stock)}
                >
                  <div className="stock-code">{stock.code}</div>
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

      {/* Product Form Modal */}
      <ProductFormModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        onSave={handleSaveProduct}
      />

      {/* Product Details Modal */}
      <ProductDetailsModal
        isOpen={isDetailsModalOpen}
        onClose={closeDetailsModal}
        productData={selectedProduct}
      />
    </>
  );
};

export default Stock;