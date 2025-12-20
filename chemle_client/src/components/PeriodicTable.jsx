import React, { useMemo, useCallback } from 'react';
import { elements } from '../data/elements';
import './PeriodicTable.css';

function PeriodicTable({ onElementSelect, disabledElements = [] }) {
  // build lookups and table structure once (memoized) to avoid repeated .find calls
  const tableStructure = useMemo(() => {
    const table = [];
    const posMap = new Map();
    const atomicMap = new Map();

    elements.forEach(e => {
      posMap.set(`${e.period}-${e.group}`, e);
      atomicMap.set(e.atomicNumber, e);
      atomicMap.set(e.symbol, e);
    });

    for (let period = 1; period <= 7; period++) {
      const row = [];

      if (period === 1) {
        row.push({ element: posMap.get('1-1') || elements.find(e => e.symbol === 'H'), col: 1 });
        for (let i = 2; i <= 17; i++) {
          row.push({ element: null, col: i });
        }
        row.push({ element: posMap.get('1-18') || elements.find(e => e.symbol === 'He'), col: 18 });
      } else if (period === 2 || period === 3 || period === 4 || period === 5) {
        for (let group = 1; group <= 18; group++) {
          const element = posMap.get(`${period}-${group}`) || null;
          row.push({ element, col: group });
        }
      } else if (period === 6 || period === 7) {
        for (let group = 1; group <= 2; group++) {
          const element = posMap.get(`${period}-${group}`) || null;
          row.push({ element, col: group });
        }

        const specialSymbol = period === 6 ? 'La' : 'Ac';
        row.push({ element: atomicMap.get(specialSymbol), col: 3 });

        for (let i = 4; i <= 17; i++) {
          row.push({ element: null, col: i });
        }

        for (let group = 4; group <= 18; group++) {
          const element = posMap.get(`${period}-${group}`) || null;
          row.push({ element, col: group });
        }
      }

      table.push({ period, cells: row });
    }

    return { table, atomicMap };
  }, []);

  const { table: memoTable, atomicMap } = tableStructure;

  const getElementTypeClass = useCallback((element) => {
    if (!element || !element.type) return '';
    return `element-type-${element.type.replace(/\s+/g, '-')}`;
  }, []);

  const disabledSet = useMemo(() => {
    return new Set(disabledElements.map(d => d && d.symbol));
  }, [disabledElements]);

  const isDisabled = useCallback((element) => {
    if (!element) return false;
    return disabledSet.has(element.symbol);
  }, [disabledSet]);

  const handleElementClick = useCallback((element) => {
    if (element && !isDisabled(element) && onElementSelect) {
      onElementSelect(element);
    }
  }, [isDisabled, onElementSelect]);

  // Event delegation: single click handler on container
  const onPeriodicContainerClick = useCallback((e) => {
    const cell = e.target.closest && e.target.closest('.periodic-cell');
    if (!cell) return;
    const symbol = cell.dataset && cell.dataset.symbol;
    const atomic = cell.dataset && cell.dataset.atomic;
    const element = symbol ? atomicMap.get(symbol) || atomicMap.get(Number(atomic)) : null;
    if (element && !isDisabled(element) && onElementSelect) {
      onElementSelect(element);
    }
  }, [atomicMap, isDisabled, onElementSelect]);

  return (
    <div className="periodic-table-container">
      <div className="periodic-table" onClick={onPeriodicContainerClick}>
        {memoTable.map((row) => (
          <div key={row.period} className="periodic-row">
            {row.cells.map((cell, index) => {
              const { element } = cell;
              const disabled = isDisabled(element);

              return (
              <div
                key={`${row.period}-${index}`}
                className={`periodic-cell ${getElementTypeClass(element)} ${element ? '' : 'empty'} ${disabled ? 'disabled selected' : ''}`}
                data-symbol={element ? element.symbol : ''}
                data-atomic={element ? element.atomicNumber : ''}
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
            const element = atomicMap.get(atomicNum) || null;
            const disabled = isDisabled(element);
            return (
              <div
                key={atomicNum}
                className={`periodic-cell ${getElementTypeClass(element)} ${disabled ? 'disabled selected' : ''}`}
                data-atomic={element ? element.atomicNumber : ''}
                data-symbol={element ? element.symbol : ''}
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
            const element = atomicMap.get(atomicNum) || null;
            const disabled = isDisabled(element);
            return (
              <div
                key={atomicNum}
                className={`periodic-cell ${getElementTypeClass(element)} ${disabled ? 'disabled selected' : ''}`}
                data-atomic={element ? element.atomicNumber : ''}
                data-symbol={element ? element.symbol : ''}
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

export default React.memo(PeriodicTable);

