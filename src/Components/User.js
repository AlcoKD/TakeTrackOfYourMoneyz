import React from 'react';
import '../css/user.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';

const User = ({ onRouteChange }) => {
	return(

		<div className='user-block'>

			<div className='user-container'>
				<div className='user-image'>
					<div className='user-border-image'>
						<FontAwesomeIcon icon={faUser} onClick={() => onRouteChange('login')} id='FAI'/>
					</div>
				</div>

				<div className='user-name'>
					<h3 className='user'>Francesco Donnarumma</h3>
				</div>
			</div>

		</div>

		);
}

export default User;