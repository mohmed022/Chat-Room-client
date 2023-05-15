export async function refreshToken(refreshToken) {
    const response = await fetch('/api/token/refresh/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ refresh: refreshToken }),
    });
    const data = await response.json();
    return data.access;
  }
  