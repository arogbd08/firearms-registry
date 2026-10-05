const glyphs = { grid: '▦', registry: '▤', people: '♙', history: '◷', settings: '⚙', search: '⌕', arrow: '→', chevron: '›', add: '+', shield: '◇', close: '×', info: 'i', desktop: '▣' };
export default function Icon({ name }) { return <span aria-hidden="true" className="icon">{glyphs[name] || '·'}</span>; }
