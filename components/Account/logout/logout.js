import React, { useEffect } from 'react';
import axiosInstance from '../../Store/axios';
import { useNavigate } from 'react-router-dom';

export default function SignOut() {
	const history = useNavigate();

	useEffect(() => {
		const response = axiosInstance.post('user/logout/blacklist/', {
			refresh_token: localStorage.getItem('refresh_token'),
		});
		console.log(response + "response")

		localStorage.removeItem('access_token');
		localStorage.removeItem('refresh_token');
		axiosInstance.defaults.headers['Authorization'] = null;
		// const confirm = (e) => {
		// 	history.push('/login')
			
		// }
		window.location.href = `/login`
		localStorage.removeItem('emaileusers')
		console.log(confirm)

	},[]);
	return <div>Logout</div>;
}
