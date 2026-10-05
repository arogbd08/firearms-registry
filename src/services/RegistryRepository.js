import { seedRegistry } from '../data/seedData.js';
import { hydrateRecord } from '../domain/RegistryRecord.js';

const STORAGE_KEY = 'northstar-registry-demo-v2';
const clone = value => JSON.parse(JSON.stringify(value));

export class RegistryRepository {
  constructor(storage = window.localStorage) { this.storage = storage; }
  read() {
    try {
      const saved = JSON.parse(this.storage.getItem(STORAGE_KEY));
      if (saved?.firearms && saved?.owners && saved?.events && saved?.ownershipHistory) return this.hydrate(saved);
    } catch { /* Fall back to fictional seed data. */ }
    return this.reset();
  }
  hydrate(data) { return { ...data, firearms: data.firearms.map(hydrateRecord) }; }
  write(data) {
    const serializable = { ...data, firearms: data.firearms.map(record => ({ ...record })) };
    this.storage.setItem(STORAGE_KEY, JSON.stringify(serializable));
    return data;
  }
  reset() { const data = this.hydrate(clone(seedRegistry)); this.write(data); return data; }
}
