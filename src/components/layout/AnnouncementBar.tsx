import React from 'react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div
      className="w-full z-50 select-none"
      style={{
        height: '60px',
        background: 'linear-gradient(135deg, #F7F9FC 0%, #EAF1FB 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        {/* Minimal truck / delivery icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#2B2B2B"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="1" y="3" width="15" height="13" rx="1" />
          <path d="M16 8h4l3 5v3h-7V8z" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>

        <span
          style={{
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.08em',
            color: '#2B2B2B',
            textTransform: 'uppercase',
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
          }}
        >
          Free Delivery Across India
        </span>
      </div>
    </div>
  );
};
