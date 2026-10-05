export const demoUsers = [
  { id: 'u-admin', name: 'Avery Admin', initials: 'AA', role: 'admin', unit: 'Demo Registry Unit' },
  { id: 'u-officer', name: 'Jordan Demo', initials: 'JD', role: 'officer', unit: 'North District' },
  { id: 'u-viewer', name: 'Riley Viewer', initials: 'RV', role: 'readonly', unit: 'Records Review' },
];

export const seedRegistry = {
  owners: [
    { id: 'OWN-1042', name: 'Alex Morgan', kind: 'Individual', area: 'North District', reference: 'DEMO-LIC-4812', updated: 'Today, 09:42' },
    { id: 'OWN-1041', name: 'Casey Taylor', kind: 'Individual', area: 'West District', reference: 'DEMO-LIC-1937', updated: 'Yesterday' },
    { id: 'OWN-1039', name: 'Riverside Sporting Club', kind: 'Organisation', area: 'Central District', reference: 'DEMO-ORG-0261', updated: '30 Sep 2026' },
    { id: 'OWN-1036', name: 'Jamie Lee', kind: 'Individual', area: 'South District', reference: 'DEMO-LIC-7720', updated: '28 Sep 2026' },
    { id: 'OWN-1031', name: 'Morgan Quinn', kind: 'Individual', area: 'North District', reference: 'DEMO-LIC-6043', updated: '22 Sep 2026' },
  ],
  firearms: [
    { id: 'FR-2026-0084', make: 'Example Arms', model: 'Field 12', type: 'Shotgun', calibre: '12 gauge', serial: 'DEMO-•••-4821', category: 'Sporting', ownerId: 'OWN-1042', status: 'Registered', registered: '12 Jun 2025', updated: 'Today, 09:42', notes: 'Fictional record for interface demonstration.' },
    { id: 'FR-2026-0083', make: 'Northline', model: 'Ranger 308', type: 'Rifle', calibre: '.308 Win', serial: 'DEMO-•••-1046', category: 'Sporting', ownerId: 'OWN-1041', status: 'Transferred', registered: '03 Feb 2024', updated: 'Yesterday', notes: 'Ownership event retained in record history.' },
    { id: 'FR-2026-0079', make: 'Meridian Works', model: 'Classic 20', type: 'Shotgun', calibre: '20 gauge', serial: 'DEMO-•••-6903', category: 'Sporting', ownerId: 'OWN-1039', status: 'Registered', registered: '19 Nov 2023', updated: '30 Sep 2026', notes: 'Fictional organisation-held demonstration record.' },
    { id: 'FR-2026-0072', make: 'Example Arms', model: 'Compact 22', type: 'Rifle', calibre: '.22 LR', serial: 'DEMO-•••-2370', category: 'Sporting', ownerId: 'OWN-1036', status: 'Lost / Stolen', registered: '08 Aug 2022', updated: '28 Sep 2026', notes: 'Training scenario only; no real incident information.' },
    { id: 'FR-2026-0068', make: 'Pioneer', model: 'Trail 410', type: 'Shotgun', calibre: '.410 bore', serial: 'DEMO-•••-9918', category: 'Sporting', ownerId: 'OWN-1042', status: 'Deactivated', registered: '17 Mar 2021', updated: '24 Sep 2026', notes: 'Fictional status history for interface demonstration.' },
    { id: 'FR-2026-0056', make: 'Southern Field', model: 'Sport 20', type: 'Shotgun', calibre: '20 gauge', serial: 'DEMO-•••-3608', category: 'Sporting', ownerId: 'OWN-1031', status: 'Registered', registered: '04 May 2020', updated: '22 Sep 2026', notes: 'Fictional record for interface demonstration.' },
  ],
  events: [
    { id: 'EVT-3021', recordId: 'FR-2026-0084', action: 'Record reviewed', detail: 'Registration details checked', actor: 'Jordan Demo', date: 'Today, 09:42' },
    { id: 'EVT-3020', recordId: 'FR-2026-0083', action: 'Ownership transferred', detail: 'Owner link updated; previous link retained', actor: 'Avery Admin', date: 'Yesterday, 14:16' },
    { id: 'EVT-3019', recordId: 'FR-2026-0072', action: 'Status updated', detail: 'Status changed to Lost / Stolen', actor: 'Jordan Demo', date: '28 Sep 2026, 11:05' },
    { id: 'EVT-3018', recordId: 'FR-2026-0079', action: 'Record created', detail: 'Fictional registration added', actor: 'Avery Admin', date: '24 Sep 2026, 10:22' },
  ],
  ownershipHistory: {
    'FR-2026-0083': [{ ownerId: 'OWN-1036', from: '03 Feb 2024', to: '18 Sep 2026' }, { ownerId: 'OWN-1041', from: '18 Sep 2026', to: null }],
  },
};
