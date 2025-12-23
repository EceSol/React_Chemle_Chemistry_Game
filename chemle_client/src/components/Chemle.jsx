import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { elements, getTodayElement, compareElements } from '../data/elements';
import PeriodicTable from './PeriodicTable';
import GuessRow from './GuessRow';
import './Chemle.css';

const MAX_GUESSES = 6;

function Chemle() {
  const [targetElement, setTargetElement] = useState(null);
  const [guesses, setGuesses] = useState([]);
  const [gameWon, setGameWon] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const guessRowRefs = useRef([]);

  useEffect(() => {
    const todayElement = getTodayElement();
    setTargetElement(todayElement);
  }, []);

  const handleElementSelect = useCallback((element) => {
    if (gameWon || gameOver) return;

    const comparison = compareElements(element, targetElement);
    const newGuess = { element, comparison };

    setGuesses(prev => {
      const newGuesses = [...prev, newGuess];

      if (comparison.isCorrect) {
        setGameWon(true);
        setGameOver(true);
      } else if (prev.length + 1 >= MAX_GUESSES) {
        setGameOver(true);
      }

      // Smooth scroll to the specific guess row
      setTimeout(() => {
        const guessIndex = newGuesses.length - 1;
        if (guessRowRefs.current[guessIndex]) {
          guessRowRefs.current[guessIndex].scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }
      }, 300);

      return newGuesses;
    });
  }, [gameWon, gameOver, targetElement]);

  const resetGame = () => {
    const todayElement = getTodayElement();
    setTargetElement(todayElement);
    setGuesses([]);
    setGameWon(false);
    setGameOver(false);
  };

  const disabledElementsMemo = useMemo(() => guesses.map(g => g.element), [guesses]);

  if (!targetElement) {
    return <div className="loading">Yükleniyor...</div>;
  }

  return (
    <div className="chemle-container">
      <header className="chemle-header">
        <h1>🧪 CHEMLE</h1>
        <p className="subtitle">Günün Elementini Tahmin Et</p>
      </header>

      {!gameWon && !gameOver && guesses.length < MAX_GUESSES && (
        <div className="periodic-table-section">
          <h2 className="section-title">Periyodik Tablodan Element Seç</h2>
          <PeriodicTable
            onElementSelect={handleElementSelect}
            disabledElements={disabledElementsMemo}
          />
        </div>
      )}

      <div className="guesses-container">
        <h2 className="section-title">Tahminleriniz</h2>
        {Array.from({ length: MAX_GUESSES }).map((_, index) => {
          const guess = guesses[index];
          return (
            <GuessRow
              key={index}
              ref={(el) => (guessRowRefs.current[index] = el)}
              guess={guess}
              isActive={!guess && index === guesses.length && !gameOver && !gameWon}
            />
          );
        })}
      </div>

      {gameWon && (
        <div className="game-result win">
          <h2>🎉 Tebrikler!</h2>
          <p>Günün elementi: <strong>{targetElement.name} ({targetElement.symbol})</strong></p>
          <p>{guesses.length} tahminde buldun!</p>
          <button onClick={resetGame}>Yeniden Oyna</button>
        </div>
      )}

      {gameOver && !gameWon && (
        <div className="game-result lose">
          <h2>😔 Oyun Bitti</h2>
          <p>Günün elementi: <strong>{targetElement.name} ({targetElement.symbol})</strong></p>
          <p>Grup: {targetElement.group}, Periyot: {targetElement.period}, Tür: {targetElement.type}</p>
          <button onClick={resetGame}>Yeniden Oyna</button>
        </div>
      )}
    </div>
  );
}

export default Chemle;
