const policy = Object.freeze({
  admin: new Set(['records.read', 'records.create', 'records.edit', 'owners.create', 'users.preview']),
  officer: new Set(['records.read', 'records.create', 'records.edit', 'owners.create']),
  readonly: new Set(['records.read']),
});

export class AccessPolicy {
  static allows(role, capability) { return policy[role]?.has(capability) ?? false; }
  static label(role) { return ({ admin: 'Demo administrator', officer: 'Registry officer', readonly: 'Read-only reviewer' })[role] || 'Demo user'; }
}
