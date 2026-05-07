import express from 'express';
import { createServer as createViteServer } from 'vite';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.set('trust proxy', 1); // Trust first proxy for rate limiting

  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  // Security Headers disabled for preview environment
  // app.use(helmet({ ... }));

  // Body parser for JSON
  app.use(express.json());

  // Explicitly serve public files in dev mode to avoid any missing config issues
  if (process.env.NODE_ENV !== "production") {
    app.use(express.static('public'));
  }

  // Rate Limiting for Lead Capture Form
  const leadCaptureLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // Limit each IP to 10 requests per windowMs
    message: { error: 'Too many requests from this IP, please try again later.' }
  });

  // Mock Lead Capture Endpoint
  app.post('/api/leads', leadCaptureLimiter, (req, res) => {
    const { email, honeypot } = req.body;
    
    // Honeypot check for bot protection
    if (honeypot) {
      return res.status(400).json({ error: 'Bot detected.' });
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Invalid email address.' });
    }

    // In a real app, you would sanitize and save to DB/CRM here.
    // We are just simulating success.
    console.log(`Lead captured: ${email}`);
    
    res.json({ 
      success: true, 
      link: 'https://drive.google.com/file/d/1HGPGnWslY2e2oDf-DJEn8As1qG_MThyj/view' 
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true, hmr: false },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Note: __dirname is the root or dist depending on if we are running the compiled code
    // Assuming esbuild produces dist/server.cjs from root
    let distPath = path.join(__dirname, 'dist');
    if (__dirname.endsWith('dist')) {
      distPath = __dirname;
    }
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
