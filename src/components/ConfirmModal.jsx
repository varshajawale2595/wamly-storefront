import React from "react";

export default function ConfirmModal({ isOpen, message, onConfirm, onCancel }) {
  if (!isOpen) return null;

  const overlayStyle = {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  };

  const boxStyle = {
    background: 'white',
    color: '#111',
    padding: '1rem',
    borderRadius: '8px',
    minWidth: '280px',
    boxShadow: '0 6px 24px rgba(0,0,0,0.2)',
    width: '90%',
    maxWidth: '400px'
  };

  const btnPrimary = {
    background: '#e04655',
    color: 'white',
    border: 'none',
    padding: '0.5rem 0.75rem',
    borderRadius: '6px',
    cursor: 'pointer'
  };

  const btnSecondary = {
    background: '#f0f0f0',
    color: '#111',
    border: 'none',
    padding: '0.5rem 0.75rem',
    borderRadius: '6px',
    cursor: 'pointer'
  };

  return (
    <div style={overlayStyle} role="dialog" aria-modal="true">
      <div style={boxStyle}>
        <h2 style={{marginBottom: '0.5rem', textAlign: 'center'}}>Confirm Removal</h2>
        <p style={{marginBottom: '1rem'}}>{message}</p>
        <div style={{display: 'flex', justifyContent: 'flex-end', gap: '0.5rem'}}>
          <button onClick={onCancel} style={btnSecondary}>Cancel</button>
          <button onClick={onConfirm} style={btnPrimary}>Remove</button>
        </div>
      </div>
    </div>
  );
}
