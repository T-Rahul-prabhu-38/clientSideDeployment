import React from 'react';

import './header.css';

const LegacyApp = () => {
  const navigateToLatest = () => {
    window.location.href = "https://star-light-web-dev-kbea.vercel.app/home"; // URL of Project 2
  };

  return (
    <>
      <div>
        <button type="button" className="go-back-button" onClick={navigateToLatest}>
          Go Home
        </button>
      </div>
    </>
  );
};

export default LegacyApp;
