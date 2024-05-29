import React from 'react';

const CloseButton1 = () => {
    const handleClose = () => {
        // Attempt to close the window if it was opened by JavaScript
        window.open('', '_self', ''); 
        window.close();
    
        // Fallback: Redirect back to WhatsApp
        window.location.href = 'whatsapp://';
      };
    
      return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <button onClick={handleClose} style={{ padding: '10px 20px', fontSize: '16px' }}>
            Return to WhatsApp
          </button>
        </div>
      );
};

export default CloseButton1;
