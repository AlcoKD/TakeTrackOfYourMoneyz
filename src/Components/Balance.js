import React from 'react';
import '../css/balance.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEuroSign} from '@fortawesome/free-solid-svg-icons';
import AddFunds from '../Components/AddFunds';

const Balance = () => {

	return(

		<div className='balance-block'>

			<div className='balance-container'>

				<div className='balance-header'>
					<h3 className='balance'> BALANCE </h3>
				</div>

				<div className='import-container'>
					<div className='balance-image'>
						<FontAwesomeIcon icon={faEuroSign} id='FAI-euro' />
					</div>
					<div className='balance-amount'>
						<p className='balance' id='value'> 0,00 €</p>
					</div>
					<AddFunds />
				</div>

			</div>

		</div>

		)};


export default Balance;