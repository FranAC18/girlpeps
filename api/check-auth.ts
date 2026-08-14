import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const cookies = req.headers.cookie || '';
  const isAuthenticated = cookies.includes('peptaire_auth=authenticated');
  return res.status(200).json({ authenticated: isAuthenticated });
}
