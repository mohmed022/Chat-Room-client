export async function getUserFromToken(token) {
    const response = await fetch('/api/user/', {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    return data;
  }
  