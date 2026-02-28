import React, { useState, memo } from "react";
import { useCart } from "../context/CartContext";

function ProductCard({product}){
  const {dispatch} = useCart();
  const [toastVisible, setToastVisible] = useState(false);

  const handleAdd = () => {
    dispatch({ type: "ADD", payload: product });
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2000);
  };

  return (
    <div className="card" style={{position: 'relative'}}>
      <h4>{product.title}</h4>
      <p>ZAR {product.price}</p>
      <button
        className="btn"
        style={{display: 'block', margin: '0.5rem auto'}}
        onClick={handleAdd}
      >
        Add
      </button>

      {toastVisible && (
        <div style={{
          position: 'fixed',
          right: '1rem',
          top: '1rem',
          background: '#323232',
          color: 'white',
          padding: '0.5rem 0.75rem',
          borderRadius: '6px',
          boxShadow: '0 6px 18px rgba(0,0,0,0.25)',
          zIndex: 1000
        }}>
          Added "{product.title}" to cart
        </div>
      )}
    </div>
  );
}

export default memo(ProductCard);
