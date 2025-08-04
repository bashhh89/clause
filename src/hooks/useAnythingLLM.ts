import { useEffect } from 'react';

export const useAnythingLLM = () => {
  useEffect(() => {
    // Check if script is already loaded
    if (document.querySelector('[data-embed-id="f7098153-28e9-4492-bb4b-b63f7a58af27"]')) {
      return;
    }

    const script = document.createElement('script');
    script.setAttribute('data-embed-id', 'f7098153-28e9-4492-bb4b-b63f7a58af27');
    script.setAttribute('data-base-api-url', 'https://ahmad-anything-llm.vo0egb.easypanel.host/api/embed');
    script.src = 'https://ahmad-anything-llm.vo0egb.easypanel.host/embed/anythingllm-chat-widget.min.js';
    script.async = true;

    document.body.appendChild(script);

    // Add custom CSS to remove branding and adapt to light/dark themes
    const style = document.createElement('style');
    style.textContent = `
      /* Professional theme-adaptive styling */
      .allm-chat-widget-button {
        background: #475569 !important;
        border: none !important;
        box-shadow: 0 4px 12px rgba(71, 85, 105, 0.3) !important;
        transition: all 0.2s ease !important;
      }
      
      .allm-chat-widget-button:hover {
        background: #334155 !important;
        transform: scale(1.05) !important;
      }
      
      /* Dark theme (default) */
      .allm-chat-window {
        background: #0f172a !important;
        border: 1px solid #334155 !important;
        border-radius: 12px !important;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5) !important;
      }
      
      .allm-chat-header {
        background: #1e293b !important;
        border-bottom: 1px solid #334155 !important;
        color: #f8fafc !important;
      }
      
      .allm-chat-messages {
        background: #0f172a !important;
      }
      
      .allm-user-message {
        background: #475569 !important;
        color: #f8fafc !important;
      }
      
      .allm-assistant-message {
        background: #1e293b !important;
        color: #e2e8f0 !important;
        border: 1px solid #334155 !important;
      }
      
      .allm-chat-input {
        background: #1e293b !important;
        border: 1px solid #334155 !important;
        color: #f8fafc !important;
      }
      
      .allm-chat-input::placeholder {
        color: #94a3b8 !important;
      }
      
      .allm-send-button {
        background: #475569 !important;
        color: #f8fafc !important;
      }
      
      .allm-send-button:hover {
        background: #334155 !important;
      }
      
      /* Light theme adaptation */
      @media (prefers-color-scheme: light) {
        .allm-chat-window {
          background: #ffffff !important;
          border: 1px solid #e2e8f0 !important;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1) !important;
        }
        
        .allm-chat-header {
          background: #f8fafc !important;
          border-bottom: 1px solid #e2e8f0 !important;
          color: #1e293b !important;
        }
        
        .allm-chat-messages {
          background: #ffffff !important;
        }
        
        .allm-user-message {
          background: #475569 !important;
          color: #ffffff !important;
        }
        
        .allm-assistant-message {
          background: #f8fafc !important;
          color: #1e293b !important;
          border: 1px solid #e2e8f0 !important;
        }
        
        .allm-chat-input {
          background: #f8fafc !important;
          border: 1px solid #e2e8f0 !important;
          color: #1e293b !important;
        }
        
        .allm-chat-input::placeholder {
          color: #64748b !important;
        }
      }
      
      /* Completely hide ALL AnythingLLM branding */
      .allm-powered-by,
      .allm-branding,
      .allm-sponsor,
      .allm-footer,
      [class*="powered-by"],
      [class*="branding"],
      [class*="sponsor"],
      [class*="anythingllm"],
      [data-testid*="powered"],
      [data-testid*="sponsor"],
      div[class*="sponsor"],
      div[class*="powered"],
      a[href*="anythingllm"],
      *[title*="AnythingLLM"],
      *[alt*="AnythingLLM"] {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        height: 0 !important;
        width: 0 !important;
        margin: 0 !important;
        padding: 0 !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      const existingScript = document.querySelector('[data-embed-id="f7098153-28e9-4492-bb4b-b63f7a58af27"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);
};