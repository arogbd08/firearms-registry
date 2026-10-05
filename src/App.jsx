import { useEffect, useMemo, useState } from 'react';
import AppHeader from './components/AppHeader.jsx';
import LandingPage from './pages/LandingPage.jsx';
import PowerBuilderPage from './pages/PowerBuilderPage.jsx';
import RegistryWorkspace from './pages/RegistryWorkspace.jsx';
import RecordDialog from './components/RecordDialog.jsx';
import { demoUsers } from './data/seedData.js';
import { AccessPolicy } from './domain/AccessPolicy.js';
import { RegistryRecord } from './domain/RegistryRecord.js';
import { RegistryRepository } from './services/RegistryRepository.js';

const repository = new RegistryRepository();
const now = () => new Date().toLocaleString('en-AU', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
const newId = (prefix, items) => `${prefix}-${String(Math.max(0, ...items.map(item => Number((item.id.match(/(\d+)$/) || [])[1]) || 0)) + 1).padStart(4, '0')}`;

export default function App() {
  const [state, setState] = useState(() => repository.read());
  const [mode, setMode] = useState('home');
  const [page, setPage] = useState('overview');
  const [previewUserId, setPreviewUserId] = useState('u-officer');
  const [dialog, setDialog] = useState(null);
  useEffect(() => { repository.write(state); }, [state]);
  const baseUser = demoUsers[1];
  const user = demoUsers.find(candidate => candidate.id === previewUserId) || demoUsers[1];
  const role = user.role;
  const can = capability => AccessPolicy.allows(role, capability);
  const ownerById = useMemo(() => new Map(state.owners.map(owner => [owner.id, owner])), [state.owners]);
  const update = change => setState(current => {
    const draft = { ...current, firearms: current.firearms.map(record => new RegistryRecord({ ...record })), owners: [...current.owners], events: [...current.events], ownershipHistory: { ...current.ownershipHistory } };
    return change(draft);
  });
  const addEvent = (next, event) => {
    next.events = [{ ...event, id: `EVT-${Date.now()}`, recordId: event.recordId, actor: `${baseUser.name}${user.id !== baseUser.id ? ` (previewing ${user.name})` : ''}` }, ...next.events];
  };
  const previewProfile = id => {
    const target = demoUsers.find(candidate => candidate.id === id || candidate.role === id) || baseUser;
    if (target.id === previewUserId) return;
    const action = target.id === baseUser.id ? 'Demo profile preview ended' : 'Demo profile preview started';
    update(next => {
      next.events = [{ id: `EVT-${Date.now()}`, recordId: 'DEMO-ACCESS', action, detail: target.id === baseUser.id ? `Returned to ${baseUser.name}` : `Previewing ${target.name} · ${AccessPolicy.label(target.role)} · simulation only`, actor: baseUser.name, date: now() }, ...next.events];
      return next;
    });
    setPreviewUserId(target.id);
  };
  const openCreate = type => {
    if (!can(type === 'owner' ? 'owners.create' : 'records.create')) return;
    setDialog({ type, title: type === 'owner' ? 'Add owner profile' : 'Register firearm' });
  };
  const openRecordAction = (record, type) => {
    if (type) setDialog({ type, title: type === 'status' ? 'Update record status' : 'Record ownership transfer', record });
  };
  const saveRecord = (form, values) => {
    const capability = form.type === 'owner' ? 'owners.create' : form.type === 'firearm' ? 'records.create' : 'records.edit';
    if (!can(capability)) throw new Error('This demo profile is read-only for this action.');
    const time = now();
    if (form.type === 'firearm') {
      if (!values.make?.trim() || !values.model?.trim() || !values.type || !values.calibre?.trim() || !values.serial?.trim() || !values.category) throw new Error('Complete the required fictional record fields.');
      const record = new RegistryRecord({ id: newId('FR-2026', state.firearms), make: values.make.trim(), model: values.model.trim(), type: values.type, calibre: values.calibre.trim(), serial: values.serial.trim().startsWith('DEMO') ? values.serial.trim() : `DEMO-${values.serial.trim()}`, category: values.category, ownerId: values.ownerId || '', status: 'Registered', registered: time.split(',')[0], updated: time, notes: values.notes?.trim() || 'Fictional record created for interface demonstration.' });
      update(next => { next.firearms = [record, ...next.firearms]; addEvent(next, { recordId: record.id, action: 'Firearm registered', detail: `${record.displayName} added as a fictional demo record`, date: time }); return next; });
      return;
    }
    if (form.type === 'owner') {
      if (!values.name?.trim() || !values.kind || !values.area || !values.reference?.trim()) throw new Error('Complete the required fictional owner fields.');
      if (!/^[A-Za-z0-9-]{3,40}$/.test(values.reference.trim())) throw new Error('Use a reference with letters, numbers, or hyphens only.');
      const owner = { id: newId('OWN', state.owners), name: values.name.trim(), kind: values.kind, area: values.area, reference: values.reference.trim().startsWith('DEMO') ? values.reference.trim() : `DEMO-${values.reference.trim()}`, updated: time };
      update(next => { next.owners = [owner, ...next.owners]; addEvent(next, { recordId: owner.id, action: 'Owner profile added', detail: `${owner.name} added as a fictional profile`, date: time }); return next; });
      return;
    }
    const record = state.firearms.find(item => item.id === form.record.id);
    if (!record) throw new Error('This demo record could not be found.');
    update(next => {
      const edited = next.firearms.find(item => item.id === record.id);
      if (form.type === 'status') {
        const event = edited.changeStatus(values.status, values.note?.trim(), user.name, time);
        addEvent(next, { ...event, recordId: edited.id, date: time });
      } else {
        const result = edited.transferTo(values.ownerId, values.note?.trim(), user.name, time);
        const ownerHistory = [...(next.ownershipHistory[edited.id] || [{ ownerId: result.previousOwnerId, from: edited.registered, to: null }])];
        if (ownerHistory.length) ownerHistory[ownerHistory.length - 1] = { ...ownerHistory[ownerHistory.length - 1], to: values.effectiveDate || time };
        ownerHistory.push({ ownerId: values.ownerId, from: values.effectiveDate || time, to: null });
        next.ownershipHistory[edited.id] = ownerHistory;
        addEvent(next, { ...result, recordId: edited.id, detail: `${ownerById.get(result.previousOwnerId)?.name || 'Unlinked'} → ${ownerById.get(values.ownerId)?.name || 'Unknown'}${values.note?.trim() ? ` · ${values.note.trim()}` : ''}`, date: time });
      }
      return next;
    });
  };
  const reset = () => { if (window.confirm('Reset all local demo changes to the original fictional sample records?')) setState(repository.reset()); };

  return <div className="app-shell"><AppHeader mode={mode} setMode={setMode} role={role} onRoleChange={previewProfile} impersonating={user.id !== baseUser.id ? { name: user.name, roleLabel: AccessPolicy.label(user.role) } : null} endImpersonation={() => previewProfile(baseUser.id)}/>
    {mode === 'home' && <LandingPage openWeb={() => { setMode('web'); setPage('overview'); }} openPowerBuilder={() => setMode('powerbuilder')}/>}
    {mode === 'powerbuilder' && <PowerBuilderPage backToWeb={() => setMode('home')}/>}
    {mode === 'web' && <RegistryWorkspace state={state} user={user} can={can} setPage={setPage} page={page} onCreate={openCreate} onSelect={openRecordAction} impersonate={() => { const next = demoUsers.find(candidate => candidate.id !== user.id); previewProfile(next?.id || baseUser.id); }}/ >}
    {mode === 'web' && <button className="reset-demo" onClick={reset}>Reset fictional demo data</button>}
    <RecordDialog dialog={dialog} owners={state.owners} onClose={() => setDialog(null)} onSave={saveRecord}/>
  </div>;
}
