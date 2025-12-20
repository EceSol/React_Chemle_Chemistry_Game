import { useState, useMemo } from 'react';
import './ElementSelector.css';

function ElementSelector({ elements, onSelect, onClose }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
  };

  const filteredElements = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (term === '') return elements;
    return elements.filter(el =>
      el.symbol.toLowerCase().includes(term) ||
      el.name.toLowerCase().includes(term) ||
      el.atomicNumber.toString().includes(term)
    );
  }, [elements, searchTerm]);

  const handleElementClick = (element) => {
    onSelect(element);
  };

  return (
    <div className="selector-overlay" onClick={onClose}>
      <div className="selector-modal" onClick={(e) => e.stopPropagation()}>
        <div className="selector-header">
          <h3>Element Seç</h3>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        <div className="selector-search">
          <input
            type="text"
            placeholder="Element ara (sembol, isim veya atom numarası)..."
            value={searchTerm}
            onChange={handleSearch}
            autoFocus
          />
        </div>

        <div className="elements-grid">
          {filteredElements.map((element) => (
            <button
              key={element.atomicNumber}
              className="element-button"
              onClick={() => handleElementClick(element)}
            >
              <div className="element-symbol">{element.symbol}</div>
              <div className="element-name">{element.name}</div>
              <div className="element-number">{element.atomicNumber}</div>
            </button>
          ))}
        </div>

        {filteredElements.length === 0 && (
          <div className="no-results">Sonuç bulunamadı</div>
        )}
      </div>
    </div>
  );
}

export default ElementSelector;


