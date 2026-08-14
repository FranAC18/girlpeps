import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch (e) {
        // Ignored fallback
      }
    }
    
    const inputPassword = (body?.password || '').toString().trim();
    const envPassword = (process.env.SITE_PASSWORD || '').toString().trim();

    if (!inputPassword) {
      return res.status(400).json({ success: false, error: 'Por favor ingresa la contraseña' });
    }

    // Check if input matches SITE_PASSWORD env var, or explicit fallback passwords
    const isValid = 
      (envPassword && inputPassword === envPassword) ||
      inputPassword === 'PeptaireSecret' ||
      inputPassword === 'peptaire2026';

    if (isValid) {
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
    return res.status(500).json({ success: false, error: 'Error interno en el servidor de autenticación' });
  }
}
