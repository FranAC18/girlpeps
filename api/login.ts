import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Allow POST requests for logging in
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    const { password } = body;
    
    // Default password for local development if environment variable is not set yet
    const correctPassword = process.env.SITE_PASSWORD || 'peptaire2026';

    if (!password) {
      return res.status(400).json({ success: false, error: 'Por favor ingresa la contraseña' });
    }

    if (password === correctPassword) {
      const isProd = process.env.NODE_ENV === 'production';
      const cookieOptions = [
        'peptaire_auth=authenticated',
        'Path=/',
        'HttpOnly',
        'SameSite=Lax',
        'Max-Age=604800', // 7 days
      ];

      if (isProd) {
        cookieOptions.push('Secure');
      }

      res.setHeader('Set-Cookie', cookieOptions.join('; '));
      return res.status(200).json({ success: true, message: 'Acceso concedido' });
    }

    return res.status(401).json({ success: false, error: 'Contraseña incorrecta. Inténtalo de nuevo.' });
  } catch (err) {
    return res.status(500).json({ success: false, error: 'Error en el servidor al procesar la solicitud' });
  }
}
