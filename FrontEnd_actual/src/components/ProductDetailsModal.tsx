import React from "react";
import "./ProductDetailsModal.css";

interface ProductDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  productData?: {
    id: string;
    brand: string;
    week: string;
    date: string;
    totalPrice: number;
    predictionSoldUnits: number;
    aiRecommendations: string;
  };
}

const ProductDetailsModal: React.FC<ProductDetailsModalProps> = ({ isOpen, onClose, productData }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="product-details-modal">
        <div className="product-details-content">
          <div className="center">
            {/* Placeholder for product image/icon */}
            <img src="src/assets/product_icon.png" alt="Product Icon" width="80" />
          </div>
          
          <div className="modal-header">
            <h2>Product Details</h2>
            <button className="close-button" onClick={onClose}>×</button>
          </div>
          
          <div className="details-container">
            <div className="form-row">
              <div className="detail-item">
                <label>ID Product:</label>
                <div className="detail-value">{productData?.id || "N/A"}</div>
              </div>
              <div className="detail-item">
                <label>Brand:</label>
                <div className="detail-value">{productData?.brand || "N/A"}</div>
              </div>
            </div>
            
            <div className="form-row">
              <div className="detail-item">
                <label>Week:</label>
                <div className="detail-value">{productData?.week || "N/A"}</div>
              </div>
              <div className="detail-item">
                <label>Date of the week:</label>
                <div className="detail-value">{productData?.date || "N/A"}</div>
              </div>
            </div>
            
            <div className="form-group">
              <div className="detail-item full-width">
                <label>Total Price:</label>
                <div className="detail-value">{productData?.totalPrice ? `${productData.totalPrice} DA` : "N/A"}</div>
              </div>
            </div>
            
            <div className="form-group">
              <div className="detail-item full-width">
                <label>Prediction of sold-units:</label>
                <div className="detail-value">{productData?.predictionSoldUnits || "N/A"}</div>
              </div>
            </div>
            
            <div className="form-group">
              <div className="detail-item full-width">
                <label>AI Recommendations:</label>
                <div className="detail-textarea">{productData?.aiRecommendations || "No recommendations available."}</div>
              </div>
            </div>
          </div>
          
          <div className="modal-actions">
            <button className="btn-close" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsModal; 