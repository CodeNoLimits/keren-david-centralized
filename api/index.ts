/**
 * Vercel Serverless Function Entry Point
 *
 * This file adapts the Express application to run as a Vercel serverless function.
 * It imports the Express app, registers all routes, and exports a handler
 * compatible with Vercel's serverless function format.
 *
 * In the Vercel environment:
 * - Static files (the React SPA) are served from the outputDirectory (dist/public)
 * - API routes (/api/*) are routed here via vercel.json rewrites
 * - The Express app handles all API logic (auth, payments, chat, etc.)
 */

import dotenv from 'dotenv';
dotenv.config();

import express, { type Request, Response, NextFunction } from 'express';
import { registerRoutes } from '../server/routes';

const app = express();

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Request logging middleware for API routes
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on('finish', () => {
    const duration = Date.now() - start;
    if (path.startsWith('/api')) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + '\u2026';
      }
      console.log(`[vercel] ${logLine}`);
    }
  });

  next();
});

// Remove X-Powered-By header for security
app.disable('x-powered-by');

// Register all API routes (this sets up auth, Stripe, chat, lottery, etc.)
let isReady = false;
const readyPromise = (async () => {
  try {
    await registerRoutes(app);
    isReady = true;
  } catch (error) {
    console.error('Failed to register routes:', error);
    throw error;
  }
})();

// Error handling middleware
app.use((err: Error & { status?: number; statusCode?: number }, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  console.error(`[vercel] Error ${status}: ${message}`);
  res.status(status).json({ message });
});

// Export the Express app as a Vercel serverless function handler.
// Vercel automatically converts the Express app into a request handler.
export default async function handler(req: any, res: any) {
  // Ensure routes are registered before handling requests
  if (!isReady) {
    await readyPromise;
  }
  return app(req, res);
}
