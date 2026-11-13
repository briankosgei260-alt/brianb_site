import React, { useState } from 'react';

export default function SerialGenerator() {
  const [serial, setSerial] = useState('');

  const generateSerial = () => {
    const randomPart = Math.random().toString(36).substring(2, 10).toUpperCase();
    const newSerial = `SN-2026-${randomPart}`;
    setSerial(newSerial);
  };

  return (
    <div style={{ textAlign: 'center', padding: '30px', background: '#111', color: '#fff', borderRadius: '10px', margin: '20px auto', maxWidth: '400px' }}>
      <h3>Generate Serial & QR Code</h3>
      <button 
        onClick={generateSerial}
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', background: '#0070f3', color: '#fff', border: 'none', borderRadius: '5px' }}
      >
        Generate
      </button>

      {serial && (
        <div style={{ marginTop: '20px' }}>
          <p style={{ fontFamily: 'monospace', fontSize: '18px', color: '#00ffcc' }}>{serial}</p>
          <img 
            src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(serial)}`} 
            alt="QR Code" 
            style={{ marginTop: '10px', background: '#fff', padding: '5px', borderRadius: '5px' }}
          />
        </div>
      )}
    </div>
  );
}