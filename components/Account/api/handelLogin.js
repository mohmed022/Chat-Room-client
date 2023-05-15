export async function login(username, password) {
    const response = await fetch('/api/token/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    localStorage.setItem('token', data.access);
    localStorage.setItem('refreshToken', data.refresh);
  }
  