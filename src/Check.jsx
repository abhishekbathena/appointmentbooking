import React from 'react';

const CloseButton1 = () => {
    const handleRedirect = () => {
        // Attempt to redirect to WhatsApp
     

        // Redirect to WhatsApp URL scheme
        window.open("whatsapp://");
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <button onClick={handleRedirect} style={{ padding: '10px 20px', fontSize: '16px' }}>
                Return to WhatsApp
            </button>
            <p style={{ marginTop: '20px', fontSize: '14px', color: 'gray' }}>
                If this doesn't work, please switch back to WhatsApp manually.
            </p>
        </div>
    );
};

export default CloseButton1;
