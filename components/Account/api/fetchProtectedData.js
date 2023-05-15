import { getToken } from './auth';

async function fetchProtectedData() {
  const token = localStorage.getItem('token');
  const response = await fetch('/api/protected-data/', {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await response.json();
  return data;
}





// async function fetchProtectedData() {
//   let token = localStorage.getItem('token');
//   const response = await fetch('/api/protected-data/', {
//     headers: { Authorization: `Bearer ${token}` },
//   });
//   if (response.status === 401) {
//     const refreshToken = localStorage.getItem('refreshToken');
//     token = await refreshToken(refreshToken);
//     localStorage.setItem('token', token);
//     // Retry the request with the new token
//   } else {
//     const data = await response.json();
//     return data;
//   }
// }
