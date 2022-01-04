import React from 'react';
import '../css/login.css';

const Login = ({ onRouteChange }) => {
	return(
		<div className='form-container'>

			<div className='form-one-container'>
				<div className='form-user-container'>
					<h3 className='form-user'>Username</h3>
					<input type='text' className='form-input' />
				</div>

				<div className='form-email-container'>
					<h3 className='form-email'>Email</h3>
					<input type='email' className='form-input' />
				</div>

				<div className='form-password-container'>
					<h3 className='form-password'>Password</h3>
					<input type='password' className='form-input'/>
				</div>
			</div>

			<div className='form-two-container'>
			<p className='form-p'> New here? Create an account for free! </p>
				<button onClick={() => onRouteChange('register')} className='form-button'>Register</button>
			</div>

			<input type='submit' id='form-submit' onClick={() => onRouteChange('home')} />
		
		</div>
		);
}

export default Login;