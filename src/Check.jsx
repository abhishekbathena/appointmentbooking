import React from 'react';

const CloseButton1 = () => {
    const handleClose = () => {
        // Attempt to close the window if it was opened by JavaScript
        window.open('', '_self');
        window.close();

       
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <button onClick={handleClose} style={{ padding: '10px 20px', fontSize: '16px' }}>
                Return to WhatsApp
            </button>
            <p style={{ marginTop: '20px', fontSize: '14px', color: 'gray' }}>
                If this doesn't work, please switch back to WhatsApp manually.
            </p>
        </div>
    );
};

export default CloseButton1;
