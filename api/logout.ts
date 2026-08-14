import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader(
    'Set-Cookie',
    'peptaire_auth=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0'
  );
  return res.status(200).json({ success: true, message: 'Sesión cerrada exitosamente' });
}
