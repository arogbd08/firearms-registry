import Icon from './Icon.jsx';
import { useMemo } from 'react';

const statusKey = value => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export default function OwnerDetail({ owner, firearms, events, onBack, onOpenFirearm }) {
  const counts = useMemo(() => ({
    total: firearms.length,
    registered: firearms.filter(record => record.status === 'Registered').length,
    other: firearms.filter(record => record.status !== 'Registered').length,
  }), [firearms]);
  if (!owner) return null;
  const initials = owner.name.split(/\s+/).map(part => part[0]).slice(0, 2).join('').toUpperCase();
  return <section className="detail-view owner-detail-view">
    <button className="back-link" onClick={onBack}>← Back to owner register</button>
    <div className="owner-detail-heading">
      <span className="owner-glyph owner-glyph-large">{initials}</span>
      <div><span className="section-kicker">OWNER PROFILE · {owner.id}</span><h1>{owner.name}</h1><p>{owner.kind} · {owner.area}</p></div>
      <span className="local-log">FICTIONAL PROFILE</span>
    </div>
    <div className="owner-facts-grid">
      <article><span>DEMO REFERENCE</span><strong>{owner.reference}</strong></article>
      <article><span>PROFILE TYPE</span><strong>{owner.kind}</strong></article>
      <article><span>AREA</span><strong>{owner.area}</strong></article>
      <article><span>LAST UPDATED</span><strong>{owner.updated}</strong></article>
    </div>
    <div className="metrics-grid owner-metrics">
      <article><span>LINKED FIREARMS</span><strong>{counts.total}</strong><small>Current demo links</small><i className="metric-symbol teal">▤</i></article>
      <article><span>REGISTERED</span><strong>{counts.registered}</strong><small>Current status</small><i className="metric-symbol green">✓</i></article>
      <article><span>OTHER STATUSES</span><strong>{counts.other}</strong><small>Transfer or attention status</small><i className="metric-symbol amber">!</i></article>
    </div>
    <section className="workspace-panel owner-linked-panel">
      <div className="panel-heading"><div><h2>Linked firearms</h2><p>Current firearm records associated with this fictional profile</p></div><span className="local-log">{firearms.length} RECORDS</span></div>
      {firearms.length ? <div className="owner-firearm-list">{firearms.map(record => <button key={record.id} className="owner-firearm-row" onClick={() => onOpenFirearm(record.id)}><span className="record-glyph"><Icon name="registry"/></span><span className="owner-firearm-title"><strong>{record.make} {record.model}</strong><small>{record.id} · {record.type} · {record.calibre}</small></span><span className={`status-pill ${statusKey(record.status)}`}><i/>{record.status}</span><Icon name="chevron"/></button>)}</div> : <div className="history-empty">No current firearm links for this demo profile.</div>}
    </section>
    <section className="workspace-panel owner-history-panel"><div className="panel-heading"><div><h2>Recent record activity</h2><p>Activity linked to this profile’s current records</p></div></div>{events.length ? events.slice(0, 8).map(event => <article className="audit-event" key={event.id}><span className="audit-icon"><Icon name="history"/></span><div><strong>{event.action}</strong><span className="audit-record">{event.recordId}</span><p>{event.detail}</p><small>Recorded by {event.actor}</small></div><time>{event.date}</time></article>) : <div className="history-empty">No activity linked to these demo records.</div>}</section>
  </section>;
}
