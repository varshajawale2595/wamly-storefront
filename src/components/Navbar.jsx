import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import logo from "../assets/logo.jpg";

export default function Navbar(){
  const {cart} = useCart();
  const navigate = useNavigate();
  const count = cart.reduce((s,i)=>s+i.qty,0);
  return (
    <div className="nav">
      <Link to="/" style={{display: 'inline-flex', alignItems: 'center', gap: '0.5rem'}}>
          <span style={{color: 'white', fontSize: '1em'}}>Store</span>
      </Link>
       <img
          src={logo}
          alt="Logo"
          style={{height: '2em', width: '5em', borderRadius: '10%', objectFit: 'cover', display: 'inline-block'}}
        />
      <button
        onClick={() => navigate('/cart')}
        style={{color: '#e04655', fontSize: '1em', background: 'white', borderRadius: '10px' ,border: 'none', cursor: 'pointer'}}
      >
        Cart ({count})
      </button>
    </div>
  );
}
