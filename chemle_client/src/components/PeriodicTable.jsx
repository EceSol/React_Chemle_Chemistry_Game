import { elements } from '../data/elements';
import './PeriodicTable.css';

function PeriodicTable({ onElementSelect, disabledElements = [] }) {
  // Periyodik tablo yapısını oluştur
  const createTableStructure = () => {
    const table = [];
    
    // Her periyot için satır oluştur
    for (let period = 1; period <= 7; period++) {
      const row = [];
      
      if (period === 1) {
        // Periyot 1: H ve He
        row.push({ element: elements.find(e => e.symbol === 'H'), col: 1 });
        // Boş hücreler
        for (let i = 2; i <= 17; i++) {
          row.push({ element: null, col: i });
        }
        row.push({ element: elements.find(e => e.symbol === 'He'), col: 18 });
      } else if (period === 2 || period === 3) {
        // Periyot 2 ve 3: Normal yapı
        for (let group = 1; group <= 18; group++) {
          const element = elements.find(e => e.period === period && e.group === group);
          row.push({ element, col: group });
        }
      } else if (period === 4 || period === 5) {
        // Periyot 4 ve 5: Geçiş metalleri dahil
        for (let group = 1; group <= 18; group++) {
          const element = elements.find(e => e.period === period && e.group === group);
          row.push({ element, col: group });
        }
      } else if (period === 6) {
        // Periyot 6: Lantanitler için özel yapı
        // İlk 2 element
        for (let group = 1; group <= 2; group++) {
          const element = elements.find(e => e.period === period && e.group === group);
          row.push({ element, col: group });
        }
        // Lantan (La) - grup 3
        row.push({ element: elements.find(e => e.symbol === 'La'), col: 3 });
        // Boş hücreler (Lantanitler için)
        for (let i = 4; i <= 17; i++) {
          row.push({ element: null, col: i });
        }
        // Son elementler
        for (let group = 4; group <= 18; group++) {
          const element = elements.find(e => e.period === period && e.group === group);
          row.push({ element, col: group });
        }
      } else if (period === 7) {
        // Periyot 7: Aktinitler için özel yapı
        // İlk 2 element
        for (let group = 1; group <= 2; group++) {
          const element = elements.find(e => e.period === period && e.group === group);
          row.push({ element, col: group });
        }
        // Aktinyum (Ac) - grup 3
        row.push({ element: elements.find(e => e.symbol === 'Ac'), col: 3 });
        // Boş hücreler (Aktinitler için)
        for (let i = 4; i <= 17; i++) {
          row.push({ element: null, col: i });
        }
        // Son elementler
        for (let group = 4; group <= 18; group++) {
          const element = elements.find(e => e.period === period && e.group === group);
          row.push({ element, col: group });
        }
      }
      
      table.push({ period, cells: row });
    }
    
    return table;
  };

  const tableStructure = createTableStructure();

  const getElementTypeClass = (element) => {
    if (!element) return '';
    // Boşlukları tire ile değiştir (CSS class adları için)
    const typeClass = element.type.replace(/\s+/g, '-');
    return `element-type-${typeClass}`;
  };

  const isDisabled = (element) => {
    if (!element) return false;
    return disabledElements.some(disabled => disabled.symbol === element.symbol);
  };

  const handleElementClick = (element) => {
    if (element && !isDisabled(element) && onElementSelect) {
      onElementSelect(element);
    }
  };

  return (
    <div className="periodic-table-container">
      <div className="periodic-table">
        {tableStructure.map((row) => (
          <div key={row.period} className="periodic-row">
            {row.cells.map((cell, index) => {
              const { element } = cell;
              const disabled = isDisabled(element);
              
              return (
                <div
                  key={`${row.period}-${index}`}
                  className={`periodic-cell ${getElementTypeClass(element)} ${element ? '' : 'empty'} ${disabled ? 'disabled' : ''}`}
                  onClick={() => handleElementClick(element)}
                  title={element ? `${element.name} (${element.symbol}) - ${element.type}` : ''}
                >
                  {element && (
                    <>
                      <div className="element-number">{element.atomicNumber}</div>
                      <div className="element-symbol">{element.symbol}</div>
                      <div className="element-name">{element.name}</div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      
      {/* Lantanitler ve Aktinitler için alt satırlar */}
      <div className="lanthanides-actinides">
        <div className="lanthanides-row">
          <div className="row-label">Lantanitler:</div>
          {[57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71].map(atomicNum => {
            const element = elements.find(e => e.atomicNumber === atomicNum);
            const disabled = isDisabled(element);
            return (
              <div
                key={atomicNum}
                className={`periodic-cell ${getElementTypeClass(element)} ${disabled ? 'disabled' : ''}`}
                onClick={() => handleElementClick(element)}
                title={element ? `${element.name} (${element.symbol})` : ''}
              >
                {element && (
                  <>
                    <div className="element-number">{element.atomicNumber}</div>
                    <div className="element-symbol">{element.symbol}</div>
                    <div className="element-name">{element.name}</div>
                  </>
                )}
              </div>
            );
          })}
        </div>
        
        <div className="actinides-row">
          <div className="row-label">Aktinitler:</div>
          {[89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103].map(atomicNum => {
            const element = elements.find(e => e.atomicNumber === atomicNum);
            const disabled = isDisabled(element);
            return (
              <div
                key={atomicNum}
                className={`periodic-cell ${getElementTypeClass(element)} ${disabled ? 'disabled' : ''}`}
                onClick={() => handleElementClick(element)}
                title={element ? `${element.name} (${element.symbol})` : ''}
              >
                {element && (
                  <>
                    <div className="element-number">{element.atomicNumber}</div>
                    <div className="element-symbol">{element.symbol}</div>
                    <div className="element-name">{element.name}</div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="legend">
        <div className="legend-item">
          <div className="legend-color element-type-metal"></div>
          <span>Metal</span>
        </div>
        <div className="legend-item">
          <div className="legend-color element-type-ametal"></div>
          <span>Ametal</span>
        </div>
        <div className="legend-item">
          <div className="legend-color element-type-yarı-metal"></div>
          <span>Yarı Metal</span>
        </div>
        <div className="legend-item">
          <div className="legend-color element-type-soygaz"></div>
          <span>Soygaz</span>
        </div>
      </div>
    </div>
  );
}

export default PeriodicTable;

