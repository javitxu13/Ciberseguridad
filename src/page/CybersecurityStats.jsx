import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../css/CybersecurityStats.css';

const CybersecurityStats = ({ label, percentage }) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  useEffect(() => {
    const animationDuration = 1000; // 1000ms = 1 second
    let startTime;

    const frame = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercentage = Math.min((progress / animationDuration) * percentage, percentage);
      setAnimatedPercentage(progressPercentage);
      if (progress < animationDuration) {
        requestAnimationFrame(frame);
      }
    };

    requestAnimationFrame(frame);
  }, [percentage]);

  return (
    <div className="cybersecurity-stat">
      <p className="stat-label">{label}</p>
      <div className="circular-progress">
        <svg className="progress-ring" width="120" height="120">
          <circle
            className="progress-ring-circle"
            strokeWidth="8"
            fill="transparent"
            r="54"
            cx="60"
            cy="60"
            style={{
              strokeDasharray: `${(2 * Math.PI * 54 * animatedPercentage) / 100} ${(2 * Math.PI * 54)}`,
            }}
          />
        </svg>
        <div className="stat-value">
          <strong>{Math.round(animatedPercentage)}%</strong>
        </div>
      </div>
    </div>
  );
};

CybersecurityStats.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

const CybersecurityStatsContainer = () => {
  return (
    <section className="cybersecurity-stats-container">
      <h2 className="cybersecurity-stats-heading">Resultados garantizados</h2>
      <div className="cybersecurity-stats-content">
        <CybersecurityStats label="Ciberataques detenidos" percentage={93} />
        <CybersecurityStats label="Objetos maliciosos neutralizados" percentage={94} />
        <CybersecurityStats label="URL maliciosas bloqueadas" percentage={96} />
      </div>
    </section>
  );
};

export default CybersecurityStatsContainer;
