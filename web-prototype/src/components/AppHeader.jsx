import Icon from './Icon.jsx';
export default function AppHeader({ mode, setMode, role, onRoleChange, impersonating, endImpersonation }) {
  return <>
    <div className="demo-ribbon"><span className="ribbon-label">FICTIONAL DEMO</span><span>Training interface · no real registry data</span><span className="ribbon-spacer"/><span className="local-state"><i/> Local browser session</span></div>
    {impersonating && <div className="impersonation-bar"><Icon name="shield"/> Previewing as <strong>{impersonating.name}</strong> · {impersonating.roleLabel}<button onClick={endImpersonation}>Exit preview</button></div>}
    <header className="app-header"><a className="product-mark" href="#home" onClick={e => { e.preventDefault(); setMode('home'); }}><span className="mark-box">N</span><span>Northstar<span className="mark-sub">REGISTRY MODEL</span></span></a>
      <nav className="model-switch" aria-label="Choose application model"><button className={mode === 'web' ? 'selected' : ''} onClick={() => setMode('web')}><Icon name="grid"/> React model</button><button className={mode === 'powerbuilder' ? 'selected' : ''} onClick={() => setMode('powerbuilder')}><Icon name="desktop"/> PowerBuilder <span className="progress-pill">IN PROGRESS</span></button></nav>
      <div className="header-right">{mode === 'web' && <label className="profile-control"><span>SIMULATE PROFILE</span><select value={role} onChange={e => onRoleChange(e.target.value)} aria-label="Simulate a fictional demo profile"><option value="officer">Jordan Demo · Officer</option><option value="admin">Avery Admin · Admin</option><option value="readonly">Riley Viewer · Read-only</option></select></label>}<span className="profile-avatar">NS</span></div>
    </header>
  </>;
}
