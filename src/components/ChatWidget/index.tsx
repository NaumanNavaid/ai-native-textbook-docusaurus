import React, { useState, useEffect, useRef } from 'react';
import './styles.css';

export default function ChatWidget(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{role: 'user' | 'assistant', content: string}>>([
    { role: 'assistant', content: 'Hello! I\'m your AI assistant for Physical AI & Robotics. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatWidgetRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatWidgetRef.current && !chatWidgetRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        'That\'s a great question! Let me help you understand that concept better.',
        'I can guide you through this topic step by step.',
        'This relates to our discussion on robotics and AI integration.',
        'Let me provide some additional context for this topic.',
        'Would you like me to show you a practical example of this concept?'
      ];

      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { role: 'assistant', content: randomResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="chat-widget" ref={chatWidgetRef}>
      {isOpen && (
        <div className="chat-widget-window">
          <div className="chat-widget-header">
            <div className="chat-widget-title">
              <div className="chat-widget-avatar">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
                  <path d="M2 17L12 22L22 17"/>
                  <path d="M2 12L12 17L22 12"/>
                </svg>
              </div>
              <div>
                <div className="chat-widget-name">AI Assistant</div>
                <div className="chat-widget-status">Online</div>
              </div>
            </div>
            <button
              className="chat-widget-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>

          <div className="chat-widget-messages">
            {messages.map((message, index) => (
              <div key={index} className={`chat-message ${message.role}`}>
                {message.role === 'assistant' && (
                  <div className="message-avatar">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
                      <path d="M2 17L12 22L22 17"/>
                      <path d="M2 12L12 17L22 12"/>
                    </svg>
                  </div>
                )}
                <div className="message-content">{message.content}</div>
              </div>
            ))}
            {isTyping && (
              <div className="chat-message assistant">
                <div className="message-avatar">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
                    <path d="M2 17L12 22L22 17"/>
                    <path d="M2 12L12 17L22 12"/>
                  </svg>
                </div>
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-widget-input">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything about Physical AI & Robotics..."
              rows={1}
              className="chat-input"
            />
            <button
              onClick={handleSendMessage}
              className="chat-send-button"
              disabled={!input.trim() || isTyping}
              aria-label="Send message"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22,2 15,22 11,13 2,9 22,2"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      <button
        className="chat-widget-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        </svg>
        {isOpen && <span className="chat-badge">1</span>}
      </button>
    </div>
  );
}