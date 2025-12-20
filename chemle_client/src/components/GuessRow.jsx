import React, { forwardRef } from 'react';
import './GuessRow.css';

const GuessRow = forwardRef(function GuessRow({ guess, isActive }, ref) {
  if (!guess && !isActive) {
    return (
      <div className="guess-row empty" ref={ref}>
        <div className="guess-cell">-</div>
        <div className="guess-cell">-</div>
        <div className="guess-cell">-</div>
        <div className="guess-cell">-</div>
      </div>
    );
  }

  if (isActive) {
    return (
      <div className="guess-row active" ref={ref}>
        <div className="guess-cell">?</div>
        <div className="guess-cell">?</div>
        <div className="guess-cell">?</div>
        <div className="guess-cell">?</div>
      </div>
    );
  }

  const { element, comparison } = guess;

  const getGroupIcon = () => {
    switch (comparison.group) {
      case 'correct':
        return '✓';
      case 'left':
        return '←';
      case 'right':
        return '→';
      default:
        return '?';
    }
  };

  const getPeriodIcon = () => {
    switch (comparison.period) {
      case 'correct':
        return '✓';
      case 'up':
        return '↑';
      case 'down':
        return '↓';
      default:
        return '?';
    }
  };

  const getTypeIcon = () => {
    return comparison.type === 'correct' ? '✓' : '✗';
  };

  const getGroupClass = () => {
    return `hint-cell ${comparison.group}`;
  };

  const getPeriodClass = () => {
    return `hint-cell ${comparison.period}`;
  };

  const getTypeClass = () => {
    return `hint-cell ${comparison.type}`;
  };

  return (
    <div className="guess-row" ref={ref}>
      <div className="guess-cell element-cell">
        <div className="element-symbol-large">{element.symbol}</div>
        <div className="element-name-small">{element.name}</div>
      </div>
      <div className={getGroupClass()}>
        <div className="hint-label">Grup</div>
        <div className="hint-value">{element.group}</div>
        <div className="hint-icon">{getGroupIcon()}</div>
      </div>
      <div className={getPeriodClass()}>
        <div className="hint-label">Periyot</div>
        <div className="hint-value">{element.period}</div>
        <div className="hint-icon">{getPeriodIcon()}</div>
      </div>
      <div className={getTypeClass()}>
        <div className="hint-label">Tür</div>
        <div className="hint-value">{element.type}</div>
        <div className="hint-icon">{getTypeIcon()}</div>
      </div>
    </div>
  );
});

export default React.memo(GuessRow);

