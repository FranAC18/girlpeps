export default function middleware(request: Request) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Allow serverless API routes, favicon, and Vercel system paths
  if (
    pathname.startsWith('/api/') ||
    pathname === '/favicon.ico' ||
    pathname.startsWith('/_vercel')
  ) {
    return;
  }

  // Check authorization cookie
  const cookieHeader = request.headers.get('cookie') || '';
  const isAuthenticated = cookieHeader.includes('peptaire_auth=authenticated');

  // If user is authenticated, pass request through to static assets / React app
  if (isAuthenticated) {
    return;
  }

  // If not authenticated, serve the custom Peptaire Labs Password Gate HTML directly at Vercel Edge
  const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Acceso Restringido — Peptaire Labs</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Plus Jakarta Sans', sans-serif; }
    body {
      min-height: 100vh;
      background-color: #FBF3E4;
      background-image: 
        radial-gradient(at 0% 0%, rgba(217, 182, 176, 0.25) 0px, transparent 50%),
        radial-gradient(at 100% 100%, rgba(198, 161, 91, 0.15) 0px, transparent 50%);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      color: #3B302A;
    }
    .card {
      background: #FFF9F0;
      border: 1px solid rgba(198, 161, 91, 0.35);
      box-shadow: 0 20px 50px -10px rgba(59, 48, 42, 0.12), 0 0 20px rgba(198, 161, 91, 0.08);
      border-radius: 24px;
      width: 100%;
      max-width: 440px;
      padding: 40px 32px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .icon-wrapper {
      width: 64px;
      height: 64px;
      background: linear-gradient(135deg, #3B302A 0%, #2A221D 100%);
      border: 1px solid rgba(198, 161, 91, 0.5);
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 24px;
      box-shadow: 0 8px 20px rgba(59, 48, 42, 0.2);
    }
    .icon-wrapper svg {
      width: 28px;
      height: 28px;
      stroke: #C6A15B;
    }
    .badge {
      display: inline-block;
      padding: 4px 12px;
      background: rgba(198, 161, 91, 0.15);
      border: 1px solid rgba(198, 161, 91, 0.3);
      border-radius: 100px;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: #9E7B35;
      margin-bottom: 12px;
    }
    h1 {
      font-size: 24px;
      font-weight: 700;
      color: #3B302A;
      margin-bottom: 8px;
      letter-spacing: -0.5px;
    }
    p.subtitle {
      font-size: 14px;
      color: #7A695D;
      line-height: 1.5;
      margin-bottom: 28px;
    }
    .input-group {
      position: relative;
      margin-bottom: 20px;
      text-align: left;
    }
    label {
      display: block;
      font-size: 12px;
      font-weight: 600;
      color: #5A4B42;
      margin-bottom: 6px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    input {
      width: 100%;
      padding: 14px 16px;
      background: #FFFFFF;
      border: 1.5px solid #E6D8C5;
      border-radius: 14px;
      font-size: 15px;
      color: #3B302A;
      outline: none;
      transition: all 0.2s ease;
    }
    input:focus {
      border-color: #C6A15B;
      box-shadow: 0 0 0 4px rgba(198, 161, 91, 0.15);
    }
    .btn {
      width: 100%;
      padding: 15px;
      background: linear-gradient(135deg, #3B302A 0%, #2A221D 100%);
      color: #FFF9F0;
      border: 1px solid rgba(198, 161, 91, 0.4);
      border-radius: 14px;
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 0.5px;
      cursor: pointer;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      box-shadow: 0 4px 12px rgba(59, 48, 42, 0.15);
    }
    .btn:hover {
      background: linear-gradient(135deg, #4A3E37 0%, #352B25 100%);
      transform: translateY(-1px);
      box-shadow: 0 6px 18px rgba(59, 48, 42, 0.25);
    }
    .btn:active {
      transform: translateY(0);
    }
    .error-msg {
      display: none;
      margin-top: 16px;
      padding: 10px 14px;
      background: #FEE2E2;
      border: 1px solid #FCA5A5;
      border-radius: 10px;
      color: #991B1B;
      font-size: 13px;
      font-weight: 500;
    }
    .footer-text {
      margin-top: 28px;
      font-size: 12px;
      color: #A39183;
    }
    .spinner {
      display: none;
      width: 18px;
      height: 18px;
      border: 2px solid rgba(255,249,240,0.3);
      border-radius: 50%;
      border-top-color: #C6A15B;
      animation: spin 0.8s linear infinite;
    }
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      20%, 60% { transform: translateX(-8px); }
      40%, 80% { transform: translateX(8px); }
    }
    .shake { animation: shake 0.4s ease-in-out; }
  </style>
</head>
<body>
  <div class="card" id="card">
    <div class="icon-wrapper">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 00-2.25 2.25z" />
      </svg>
    </div>
    <div class="badge">Peptaire Labs — Privado</div>
    <h1>Acceso Protegido</h1>
    <p class="subtitle">Ingresa la contraseña autorizada para ingresar al catálogo de Peptaire Labs.</p>
    
    <form id="loginForm">
      <div class="input-group">
        <label for="password">Contraseña</label>
        <input type="password" id="password" placeholder="••••••••" required autofocus autocomplete="current-password" />
      </div>
      <button type="submit" class="btn" id="btn">
        <span id="btnText">Ingresar a la plataforma</span>
        <div class="spinner" id="spinner"></div>
      </button>
    </form>

    <div class="error-msg" id="errorMsg"></div>

    <p class="footer-text">© Peptaire Labs — Research & Innovation</p>
  </div>

  <script>
    const form = document.getElementById('loginForm');
    const input = document.getElementById('password');
    const btn = document.getElementById('btn');
    const btnText = document.getElementById('btnText');
    const spinner = document.getElementById('spinner');
    const errorMsg = document.getElementById('errorMsg');
    const card = document.getElementById('card');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const password = input.value.trim();
      if (!password) return;

      btn.disabled = true;
      btnText.textContent = 'Verificando...';
      spinner.style.display = 'block';
      errorMsg.style.display = 'none';

      try {
        const res = await fetch('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ password })
        });
        const data = await res.json();

        if (res.ok && data.success) {
          btnText.textContent = '¡Acceso concedido!';
          btn.style.background = '#15803D';
          setTimeout(() => {
            window.location.reload();
          }, 400);
        } else {
          showError(data.error || 'Contraseña incorrecta');
        }
      } catch (err) {
        showError('Error de conexión con el servidor');
      } finally {
        btn.disabled = false;
        spinner.style.display = 'none';
        if (btnText.textContent !== '¡Acceso concedido!') {
          btnText.textContent = 'Ingresar a la plataforma';
        }
      }
    });

    function showError(msg) {
      errorMsg.textContent = msg;
      errorMsg.style.display = 'block';
      card.classList.remove('shake');
      void card.offsetWidth;
      card.classList.add('shake');
      input.focus();
      input.select();
    }
  </script>
</body>
</html>`;

  return new Response(html, {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store, max-age=0',
    },
  });
}
