import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import ConfirmModal from "../components/ConfirmModal";

export default function Cart(){
  const {cart,dispatch} = useCart();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalItem, setModalItem] = useState(null);
  const total = cart.reduce((s,i)=>s+i.price*i.qty,0);

  return (
    <>
      <div className="grid">
        {cart.map(i=>(
          <div key={i.id}  className="card" >
            <h4>{i.title}</h4>
            <p>{i.qty}</p>
            <button
              className="btn"
              onClick={() => {
                setModalItem(i);
                setModalOpen(true);
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div style={{marginTop: '1rem', textAlign: 'center'}}>
        <h2>Total: ZAR {total.toFixed(2)}</h2>
      </div>
      <ConfirmModal
        isOpen={modalOpen}
        message={modalItem ? `Remove "${modalItem.title}" from cart?` : ''}
        onConfirm={() => {
          if (modalItem) dispatch({ type: "REMOVE", payload: modalItem.id });
          setModalOpen(false);
          setModalItem(null);
        }}
        onCancel={() => {
          setModalOpen(false);
          setModalItem(null);
        }}
      />
    </>
  );
}
