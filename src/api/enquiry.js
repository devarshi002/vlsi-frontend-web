// ── Base URL ──────────────────────────────────────────────────────────────
// In development: FastAPI runs on localhost:8000
// In production:  set VITE_API_URL in your Vercel/Netlify env vars
//                 e.g. VITE_API_URL=https://nanocore-backend.onrender.com
const BASE_URL = import.meta.env.VITE_API_URL || 'https://vlsi-backend-web.onrender.com';

// ── Popup form ────────────────────────────────────────────────────────────
export async function submitPopupEnquiry(data) {
  const res = await fetch(`${BASE_URL}/api/enquiry/popup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    // 422 = validation error, 429 = rate limited
    const err = await res.json().catch(() => ({}));
    throw new Error(err?.detail || `Server error ${res.status}`);
  }

  return res.json(); // { success: boolean, message: string }
}

// ── Contact page form ─────────────────────────────────────────────────────
export async function submitContactEnquiry(data) {
  const res = await fetch(`${BASE_URL}/api/enquiry/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err?.detail || `Server error ${res.status}`);
  }

  return res.json();
}