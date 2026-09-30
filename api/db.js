import { DatabaseSync } from 'node:sqlite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.resolve(__dirname, '../dentaktif.sqlite');

const db = new DatabaseSync(dbPath);

// Initialize Tables
db.exec(`
  CREATE TABLE IF NOT EXISTS leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ref TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT,
    phone TEXT NOT NULL,
    country TEXT,
    treatment TEXT,
    preferred_date TEXT,
    notes TEXT,
    status TEXT DEFAULT 'New Lead',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

// Seed initial records if empty
const countRow = db.prepare('SELECT COUNT(*) as count FROM leads').get();
if (countRow.count === 0) {
  const insertSeed = db.prepare(`
    INSERT INTO leads (ref, name, email, phone, country, treatment, preferred_date, notes, status, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);
  
  insertSeed.run('#DAC-849201', 'Sarah Jenkins', 'sarah.j@example.co.uk', '+44 7700 900077', '🇬🇧 United Kingdom', 'Hollywood Smile (Veneers)', '2026-10-12', 'Interested in 20 E-Max veneers', 'New Lead', '2026-09-28 14:20:00');
  insertSeed.run('#DAC-739104', 'Hans Weber', 'hans.weber@example.de', '+49 151 23456789', '🇩🇪 Germany', 'All-on-6 Dental Implants', '2026-10-18', 'Requires upper jaw full restoration with Straumann', 'Offer Sent', '2026-09-25 10:15:00');
  insertSeed.run('#DAC-520193', 'Claire Dubois', 'claire.dubois@example.fr', '+33 6 12 34 56 78', '🇫🇷 France', 'Zirconia Crowns Makeover', '2026-10-05', 'Flight booked from Paris CDG, needs VIP transfer', 'Flight Booked', '2026-09-20 16:40:00');
}

export function getAllLeads() {
  const stmt = db.prepare('SELECT * FROM leads ORDER BY id DESC');
  return stmt.all();
}

export function createLead(data) {
  const refCode = `DAC-${Math.floor(100000 + Math.random() * 900000)}`;
  const stmt = db.prepare(`
    INSERT INTO leads (ref, name, email, phone, country, treatment, preferred_date, notes, status)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'New Lead')
  `);

  stmt.run(
    `#${refCode}`,
    data.fullName || data.name || 'Anonymous Patient',
    data.email || '',
    data.phone || '',
    data.country || 'International',
    data.treatment || 'General Consultation',
    data.preferredDate || data.preferred_date || '',
    data.notes || ''
  );

  return db.prepare('SELECT * FROM leads WHERE ref = ?').get(`#${refCode}`);
}

export function updateLeadStatus(id, status) {
  const stmt = db.prepare('UPDATE leads SET status = ? WHERE id = ?');
  stmt.run(status, Number(id));
  return db.prepare('SELECT * FROM leads WHERE id = ?').get(Number(id));
}

export function deleteLead(id) {
  const stmt = db.prepare('DELETE FROM leads WHERE id = ?');
  stmt.run(Number(id));
  return { success: true };
}
