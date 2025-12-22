import React, { useMemo, useCallback } from 'react';
import { elements } from '../data/elements';
import './PeriodicTable.css';

const LEGEND_ITEMS = [
  { key: 'alkali', label: 'Alkali metaller' },
  { key: 'toprak-alkali', label: 'Toprak alkali metaller' },
  { key: 'gecis-metali', label: 'Geçiş metalleri' },
  { key: 'ara-gecis-metali', label: 'Ara geçiş metalleri' },
  { key: 'yari-metal', label: 'Yarı metaller' },
  { key: 'ametal', label: 'Ametaller' },
  { key: 'soy-gaz', label: 'Soy gazlar' },
  { key: 'aktinit', label: 'Aktinitler' },
  { key: 'lantanit', label: 'Lantanitler' },
  { key: 'belirsiz', label: 'Özellikleri bilinmeyenler' },
];

const slugify = (value = '') =>
  value
    .toString()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

function PeriodicTable({ onElementSelect, disabledElements = [] }) {
  // build lookups and table structure once (memoized) to avoid repeated .find calls
  const tableStructure = useMemo(() => {
    const table = [];
    const posMap = new Map();
    const atomicMap = new Map();

    elements.forEach((e) => {
      posMap.set(`${e.period}-${e.group}`, e);
      atomicMap.set(e.atomicNumber, e);
      atomicMap.set(e.symbol, e);
    });

    for (let period = 1; period <= 7; period++) {
      const row = [];

      if (period === 1) {
        row.push({ element: posMap.get('1-1') || elements.find((e) => e.symbol === 'H'), col: 1 });
        for (let i = 2; i <= 17; i++) {
          row.push({ element: null, col: i });
        }
        row.push({ element: posMap.get('1-18') || elements.find((e) => e.symbol === 'He'), col: 18 });
      } else if (period === 2 || period === 3 || period === 4 || period === 5) {
        for (let group = 1; group <= 18; group++) {
          const element = posMap.get(`${period}-${group}`) || null;
          row.push({ element, col: group });
        }
      } else if (period === 6 || period === 7) {
        const specialSymbol = period === 6 ? 'La' : 'Ac';
        for (let group = 1; group <= 18; group++) {
          if (group === 3) {
            row.push({ element: atomicMap.get(specialSymbol) || null, col: group });
          } else {
            const element = posMap.get(`${period}-${group}`) || null;
            row.push({ element, col: group });
          }
        }
      }

      table.push({ period, cells: row });
    }

    return { table, atomicMap };
  }, []);

  const { table: memoTable, atomicMap } = tableStructure;

  const getElementTypeClass = useCallback((element) => {
    if (!element) return '';
    if (element.family) {
      return `element-family-${slugify(element.family)}`;
    }
    if (element.type) {
      return `element-type-${slugify(element.type)}`;
    }
    return '';
  }, []);

  const disabledSet = useMemo(() => new Set(disabledElements.map((d) => d && d.symbol)), [disabledElements]);

  const isDisabled = useCallback(
    (element) => {
      if (!element) return false;
      return disabledSet.has(element.symbol);
    },
    [disabledSet]
  );

  // Event delegation: single click handler on container
  const onPeriodicContainerClick = useCallback(
    (e) => {
      const cell = e.target.closest && e.target.closest('.periodic-cell');
      if (!cell) return;
      const symbol = cell.dataset && cell.dataset.symbol;
      const atomic = cell.dataset && cell.dataset.atomic;
      const element = symbol ? atomicMap.get(symbol) || atomicMap.get(Number(atomic)) : null;
      if (element && !isDisabled(element) && onElementSelect) {
        onElementSelect(element);
      }
    },
    [atomicMap, isDisabled, onElementSelect]
  );

  const renderSeriesRow = useCallback(
    (label, atomicRange) => (
      <div key={label} className="series-row">
        <div className="row-label">{label}:</div>
        <div className="series-grid">
          {[0, 1, 2].map((offset) => (
            <div key={`${label}-offset-${offset}`} className="periodic-cell empty spacer" aria-hidden="true"></div>
          ))}
          {atomicRange.map((atomicNum) => {
            const element = atomicMap.get(atomicNum) || null;
            const disabled = isDisabled(element);
            return (
              <div
                key={atomicNum}
                className={`periodic-cell ${getElementTypeClass(element)} ${disabled ? 'disabled selected' : ''}`}
                data-atomic={element ? element.atomicNumber : ''}
                data-symbol={element ? element.symbol : ''}
                title={element ? `${element.name} (${element.symbol}) - ${element.family || element.type}` : ''}
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
    ),
    [atomicMap, getElementTypeClass, isDisabled]
  );

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
                  className={`periodic-cell ${getElementTypeClass(element)} ${element ? '' : 'empty'} ${
                    disabled ? 'disabled selected' : ''
                  }`}
                  data-symbol={element ? element.symbol : ''}
                  data-atomic={element ? element.atomicNumber : ''}
                  title={element ? `${element.name} (${element.symbol}) - ${element.family || element.type}` : ''}
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

      <div className="lanthanides-actinides">
        {renderSeriesRow('Lantanitler', [57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71])}
        {renderSeriesRow('Aktinitler', [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103])}
      </div>

      <div className="legend">
        {LEGEND_ITEMS.map((item) => (
          <div key={item.key} className="legend-item">
            <div className={`legend-color element-family-${item.key}`}></div>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default React.memo(PeriodicTable);
