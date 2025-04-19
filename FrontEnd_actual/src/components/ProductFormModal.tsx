import React, { useState } from "react";
import axios from "axios";
interface ProductFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (productData: any) => void;
}

const ProductFormModal: React.FC<ProductFormModalProps> = ({ isOpen, onClose, onSave }) => {
  const [productId, setProductId] = useState("");
  const [brand, setBrand] = useState("");
  const [date, setDate] = useState("");
  const [week, setWeek] = useState("");
  const [basePrice, setBasePrice] = useState(15000);
  const [totalPrice, setTotalPrice] = useState(45000);
  const [hasAdvertisements, setHasAdvertisements] = useState(true);
  const [isWellPlaced, setIsWellPlaced] = useState(true);
  
  if (!isOpen) return null;

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    const productData = {
      id: productId,
      brand,
      date,
      week,
      basePrice,
      totalPrice,
      hasAdvertisements,
      isWellPlaced
    };
    const predictData={
      
        "store_id": 1,
        "sku_id": productData.id,
        "week": productData.week,
        "base_price": productData.basePrice,
        "total_price": productData.totalPrice,
        "is_featured_sku": productData.hasAdvertisements,
        "is_display_sku": productData.isWellPlaced
      
    }

    try {
      const result=await axios.post("https://api-model-jkwe.onrender.com/predict", predictData, {
        headers:{
          "Content-Type": "application/json"
        }
        
      })
      console.log("Prediction result:", result.data);

    }
    catch (error) {
      console.error("Error saving product data:", error);
    }

    onSave(productData);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="product-modal">
        <div className="product-modal-content">
          <h2>Add new product</h2>
          <div className="image-placeholder">
            <img src="src/assets/add_image.png" alt="Upload product image" />
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="productId">ID Product :</label>
                <input 
                  type="text" 
                  id="productId"
                  className="form-control"
                  value={productId}
                  onChange={(e) => setProductId(e.target.value)}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="brand">Brand :</label>
                <input 
                  type="text" 
                  id="brand"
                  className="form-control"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                />
              </div>
            </div>
            
            <div className="form-row">
              
              
              <div className="form-group">
                <label htmlFor="week">Week :</label>
                <input 
                  type="date" 
                  id="week"
                  className="form-control"
                  value={week}
                  onChange={(e) => setWeek(e.target.value)}
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="basePrice">Base Price :</label>
              <div className="price-control">
                <div className="price-slider-container">
                  <input 
                    type="range" 
                    min="0" 
                    max="3000" 
                    value={basePrice} 
                    onChange={(e) => setBasePrice(Number(e.target.value))}
                    className="price-slider"
                  />
                  <div className="price-bubble">{basePrice} $</div>
                </div>
                <div className="price-inputs">
                  <input type="text" value="0 $" readOnly className="price-input" />
                  <span>-</span>
                  <input type="text" value="3000 $" readOnly className="price-input" />
                </div>
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="totalPrice">Total Price :</label>
              <div className="price-control">
                <div className="price-slider-container">
                  <input 
                    type="range" 
                    min="0" 
                    max="3000" 
                    value={totalPrice} 
                    onChange={(e) => setTotalPrice(Number(e.target.value))}
                    className="price-slider"
                  />
                  <div className="price-bubble">{totalPrice} $</div>
                </div>
                <div className="priceprice-inputs">
                  <input type="text" value="0" readOnly className="price-input" />
                  <span>-</span>
                  <input type="text" value="3000 $" readOnly className="price-input" />
                </div>
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Advertisements :</label>
                <div className="radio-group">
                  <label className={`radio-option ${hasAdvertisements ? 'selected' : ''}`}>
                    <input 
                      type="radio" 
                      name="advertisements" 
                      checked={hasAdvertisements} 
                      onChange={() => setHasAdvertisements(true)}
                    />
                    Yes
                  </label>
                  <label className={`radio-option ${!hasAdvertisements ? 'selected' : ''}`}>
                    <input 
                      type="radio" 
                      name="advertisements" 
                      checked={!hasAdvertisements} 
                      onChange={() => setHasAdvertisements(false)}
                    />
                    NO
                  </label>
                </div>
              </div>
              
              <div className="form-group">
                <label>Well-placed :</label>
                <div className="radio-group">
                  <label className={`radio-option ${isWellPlaced ? 'selected' : ''}`}>
                    <input 
                      type="radio" 
                      name="wellPlaced" 
                      checked={isWellPlaced} 
                      onChange={() => setIsWellPlaced(true)}
                    />
                    Yes
                  </label>
                  <label className={`radio-option ${!isWellPlaced ? 'selected' : ''}`}>
                    <input 
                      type="radio" 
                      name="wellPlaced" 
                      checked={!isWellPlaced} 
                      onChange={() => setIsWellPlaced(false)}
                    />
                    NO
                  </label>
                </div>
              </div>
            </div>
            
            <div className="form-actions">
              <button type="button" className="btn-cancel" onClick={onClose}>Cancel</button>
              <button type="submit" className="btn-save">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductFormModal;