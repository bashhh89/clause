'use client';

import React, { useEffect, useRef } from 'react';

interface LaravelCRMInterfaceProps {
  // You might want to pass specific views or data to the CRM in the future
  // For now, it's a simple embed.
}

const LaravelCRMInterface: React.FC<LaravelCRMInterfaceProps> = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const crmAppUrl = 'https://crm.qandu.io/'; 

  useEffect(() => {
    // You can add logic here to handle messages from the iframe if needed.
    // For example, to listen for a custom event from the iframe:
    /*
    const handleMessage = (event: MessageEvent) => {
      // Ensure you trust the origin of the messages
      if (event.origin !== 'YOUR_LARAVEL_CRM_ORIGIN') return;
      if (event.data === 'crm_action_completed') {
        // Handle action completed, e.g., show a notification in the main portfolio page
        console.log('CRM action completed:', event.data);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
    */
  }, []);

  // The URL is now configured, so we can directly render the iframe.

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700">
      <iframe
        ref={iframeRef}
        src={crmAppUrl}
        className="w-full h-full"
        title="Laravel CRM"
        allow="fullscreen *"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-top-navigation"
      />
    </div>
  );
};

export default LaravelCRMInterface;
