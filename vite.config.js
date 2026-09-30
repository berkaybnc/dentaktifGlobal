import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { getAllLeads, createLead, updateLeadStatus, deleteLead } from './api/db.js';

function sqliteApiPlugin() {
  return {
    name: 'vite-plugin-sqlite-api',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = new URL(req.url, `http://${req.headers.host}`);
        const pathname = url.pathname;

        if (pathname.startsWith('/api/consultations') || pathname === '/api/submit-consultation') {
          res.setHeader('Content-Type', 'application/json');

          // GET /api/consultations
          if (req.method === 'GET' && (pathname === '/api/consultations' || pathname === '/api/consultations/')) {
            try {
              const leads = getAllLeads();
              res.statusCode = 200;
              return res.end(JSON.stringify({ success: true, leads }));
            } catch (err) {
              res.statusCode = 500;
              return res.end(JSON.stringify({ success: false, error: err.message }));
            }
          }

          // Helper to parse JSON body
          const getBody = () => new Promise((resolve) => {
            let body = '';
            req.on('data', chunk => { body += chunk; });
            req.on('end', () => {
              try {
                resolve(JSON.parse(body || '{}'));
              } catch {
                resolve({});
              }
            });
          });

          // POST /api/consultations or /api/submit-consultation
          if (req.method === 'POST') {
            try {
              const body = await getBody();
              const lead = createLead(body);
              res.statusCode = 200;
              return res.end(JSON.stringify({
                success: true,
                message: 'Consultation registered in SQLite DB successfully',
                lead,
                referenceId: lead.ref
              }));
            } catch (err) {
              res.statusCode = 500;
              return res.end(JSON.stringify({ success: false, error: err.message }));
            }
          }

          // PATCH /api/consultations/:id
          if (req.method === 'PATCH') {
            try {
              const parts = pathname.split('/');
              const id = parts[parts.length - 1];
              const body = await getBody();
              const updated = updateLeadStatus(id, body.status);
              res.statusCode = 200;
              return res.end(JSON.stringify({ success: true, lead: updated }));
            } catch (err) {
              res.statusCode = 500;
              return res.end(JSON.stringify({ success: false, error: err.message }));
            }
          }

          // DELETE /api/consultations/:id
          if (req.method === 'DELETE') {
            try {
              const parts = pathname.split('/');
              const id = parts[parts.length - 1];
              deleteLead(id);
              res.statusCode = 200;
              return res.end(JSON.stringify({ success: true }));
            } catch (err) {
              res.statusCode = 500;
              return res.end(JSON.stringify({ success: false, error: err.message }));
            }
          }
        }

        next();
      });
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sqliteApiPlugin()],
  server: {
    port: 3000,
    open: true
  }
});
