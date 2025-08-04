'use client';

import React, { useEffect, useRef } from 'react';

interface VPSChatInterfaceProps {
  onClose: () => void;
}

const VPSChatInterface: React.FC<VPSChatInterfaceProps> = ({ onClose }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const chatAppUrl = 'https://clausen-malte.vo0egb.easypanel.host/'; 

  useEffect(() => {
    // You can add logic here to handle messages from the iframe if needed,
    // but for a simple embed, this is often not necessary.
    // For example, to listen for a custom event from the iframe:
    /*
    const handleMessage = (event: MessageEvent) => {
      // Ensure you trust the origin of the messages
      if (event.origin !== 'YOUR_VPS_CHAT_APP_ORIGIN') return;
      if (event.data === 'close_chat') {
        onClose();
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
    */
  }, [onClose]);

  // The URL is now configured, so we can directly render the iframe.

  return (
    <div className="relative w-full h-[800px] rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700">
      <iframe
        ref={iframeRef}
        src={chatAppUrl}
        className="w-full h-full"
        title="VPS Hosted Chat"
        allow="microphone; camera; fullscreen *"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-top-navigation"
      />
      {/* Optional: Add a small close button within the chat card area, though the main one is outside */}
      {/* <button 
        onClick={onClose}
        className="absolute top-2 right-2 z-10 p-1 rounded-full bg-slate-800 text-slate-100 hover:bg-slate-700"
        aria-label="Close chat"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button> */}
    </div>
  );
};

export default VPSChatInterface;
