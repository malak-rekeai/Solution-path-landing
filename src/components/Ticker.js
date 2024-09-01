import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Ticker.css';

const Ticker = ({ companies }) => {
  return (
    <div className="ticker-container">
      <div className="ticker-text">
        {companies.map((company, index) => (
          <span key={index} className="ticker-item">
            <FontAwesomeIcon icon={company.icon} className="company-icon" />
            {company.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Ticker;
