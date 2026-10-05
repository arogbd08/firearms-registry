export const FIREARM_STATUSES = Object.freeze(['Registered', 'Transferred', 'Lost / Stolen', 'Deactivated']);
const STATUS_TRANSITIONS = Object.freeze({
  Registered: ['Transferred', 'Lost / Stolen', 'Deactivated'],
  Transferred: ['Registered', 'Lost / Stolen', 'Deactivated'],
  'Lost / Stolen': ['Registered', 'Deactivated'],
  Deactivated: [],
});

export class RegistryRecord {
  constructor({ id, make, model, type, calibre, serial, category, ownerId = '', status = 'Registered', registered, updated, notes = '' }) {
    Object.assign(this, { id, make, model, type, calibre, serial, category, ownerId, status, registered, updated, notes });
  }
  get displayName() { return `${this.make} ${this.model}`; }
  get statusKey() { return this.status.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''); }
  get allowedStatuses() { return STATUS_TRANSITIONS[this.status] || []; }
  changeStatus(nextStatus, note, actor, timestamp) {
    if (!this.allowedStatuses.includes(nextStatus)) throw new Error('That status change is not allowed by the demo workflow.');
    const previous = this.status;
    this.status = nextStatus;
    this.updated = timestamp;
    return { action: 'Status updated', detail: `${previous} → ${nextStatus}${note ? ` · ${note}` : ''}`, actor, date: timestamp };
  }
  transferTo(ownerId, note, actor, timestamp) {
    if (!ownerId) throw new Error('Choose an owner for the transfer.');
    const previousOwnerId = this.ownerId;
    this.ownerId = ownerId;
    this.status = 'Transferred';
    this.updated = timestamp;
    return { previousOwnerId, action: 'Ownership transferred', detail: `Ownership link changed${note ? ` · ${note}` : ''}`, actor, date: timestamp };
  }
}

export function hydrateRecord(record) { return new RegistryRecord(record); }
