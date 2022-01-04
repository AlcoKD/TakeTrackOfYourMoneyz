import React from 'react';
import '../css/addFunds.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusCircle,faMinusCircle,faTrashAlt} from '@fortawesome/free-solid-svg-icons';

const AddFunds = () => {

		React.useEffect(() => { 											// making <--this function starts only when the window is fully loaded;
const addValue = document.querySelector('#plus');						// select the dom element with 'plus' as id;
const substractValue = document.querySelector('#minus');  				// select the dom element with 'minus' as id;
const recordSection = document.querySelector('#record-section'); 		//  select the dom element with 'record-section' as id;

addValue.addEventListener('click',addOnClick); 							// adding an event listener of click running 'addOnClick' function when triggered;
substractValue.addEventListener('click', substractOnClick); 			// adding an event listener of click running 'substractOnClick' function when triggered;

function addOnClick () { 												// when the user wants to add, <--this function is triggered by clicking 'addValue';
	let addDiv = document.createElement('div'); 						// creates a new div element;
	addDiv.setAttribute('class', 'addDiv'); 							// gives a class of 'addDiv' to the selected item;
	document.body.appendChild(addDiv); 									// gives the right position (right inside the body in this case) to the given element;
	
	let addText = document.createElement('h2');
	addText.setAttribute('class', 'addH2');	
	addDiv.appendChild(addText);
	addText.textContent = 'Add here the value you want to add,only decimals and cents are allowed, any extra number will result in an approximation ';
	// the line above is used to target the textContent of the selected element and change or add it;


	let addInput = document.createElement('input');
	addInput.setAttribute('class', 'addInput');
	addInput.setAttribute('type', 'text');
	addDiv.appendChild(addInput);



	let addDivComment = document.createElement('div');
	addDivComment.setAttribute('class', 'addDivComment');
	addDiv.appendChild(addDivComment);

	let addTextComment = document.createElement('h2');
	addTextComment.setAttribute('class', 'addH2Comment');
	addDiv.appendChild(addTextComment);
	addTextComment.textContent = 'Add here the reason you spent or gained this amount'

	let addInputComment = document.createElement('input');
	addInputComment.setAttribute('class', 'addInputComment');
	addInputComment.setAttribute('type', 'text');
	addDiv.appendChild(addInputComment);

	let addButtonComment = document.createElement('button');
	addButtonComment.setAttribute('class', 'addButtonComment');
	addDiv.appendChild(addButtonComment);
	addButtonComment.textContent = 'Push';

	addButtonComment.addEventListener('click', pushValue);

	//until there we gived the user the option to add a certain value, creating a div, h2, input... and a button;
	//now we want the user the be able to push this value and check for it to be valid for what we wanna do;


	function pushValue () { 
		let value = document.querySelector('#value');
		let givenValue = addInput.value; 							// we're targetting the value of addInput and storing it into a variable as a string;
		let fixedValue = parseFloat(givenValue).toFixed(2); 		// and now we're translating it to a number and accepting a max number after the '.' of 2, only having decimals and cents. Note dat every number gived after cents will be used to approx the final amount.
		let range = /[^0-9-.]/;										// this syntax simply store for us a value from 'x' to 'y' and '.';
																	//we will use 'range' to only accept numbers and pointer in our input;
		let givenComment = addInputComment.value;

		// we're gonna use the if statement to tell the program what we need it to do in the different scenarios that could happen;

		//in this first case we're gonna check if there's a ','. it's important because if our User intends to give a decimal number with ',' it will not be considered. Our program only accepts pointer.
		if (givenValue.match(",")) {								// using .match() we're checking for a certain character to exist inside the given variable;
			fixedValue = 0; 										// we need to fix the value given or it will be read as NaN;
			alert('please use "." instead of "," and try again') 	// alert simply runs a popup on the user screen with a text message;

		}
		// second case: if givenValue contains what we stored in range but even other different characters it's gonna display an error;
		else if(givenValue.match(range)) {
			fixedValue = 0;
			alert('no characters are allowed!');
		
		} 
		// third case: if the user has given the right value, we're gonna know by parsing it and checking it to not be NaN, if so this case gets triggered;
		else if (!isNaN(fixedValue)) {
			// at this point, we can push the user choice by making sure what we're adding are numbers with only decimals and cents and translate the result into a string;
			

			value.textContent =  (parseFloat(value.textContent) + parseFloat(fixedValue)).toFixed(2).toString();

			if (givenComment !== '' || !null) {
			let record = document.createElement('div');
			const deleteIcon = document.querySelector('#deleteIcon');
			let newDeleteIcon = deleteIcon.cloneNode(true);
			let index = document.querySelectorAll('.deleteIcon').length;

			record.setAttribute('class', 'record-container');				
			newDeleteIcon.setAttribute('class', 'deleteIcon');
			newDeleteIcon.style = ('display: block', 'width: 1.5%');
			record.setAttribute('id', index);
			newDeleteIcon.setAttribute('id', index);
			newDeleteIcon.addEventListener('click', function deleteRecord(){
				newDeleteIcon.parentNode.remove()
				value.textContent = parseFloat(value.textContent) -parseFloat(newDeleteIcon.parentNode.children[1].textContent.toString().substring(1));
			});

			let recordValue = document.createElement('h2');
			recordValue.textContent ='+' + fixedValue;
			recordValue.setAttribute('class', 'record-amount');
			recordValue.setAttribute('class', 'add')
			recordValue.setAttribute('value', fixedValue);

			let recordComment = document.createElement('p');
			recordComment.textContent = givenComment.toString();
			recordComment.setAttribute('class', 'record-comment');

			recordSection.appendChild(record); record.appendChild(newDeleteIcon);
			record.appendChild(recordValue); record.appendChild(recordComment);

		}
		
		} else if (isNaN(fixedValue)) {
			fixedValue = 0;
			alert("The value you're giving is not a number");

		} else {
			alert('please check your value and try again');

		}
		// this function helps us whenever the values chosen are invalid, removing the window to add these values;
		addDiv.remove();
		
	}

}




// SUBSTRACTION SECTION ---------------------------------------------------------------------------------------------------------

function substractOnClick () { // it's exactly the same us 'addOnClick', just tells the program to substract instead of adding;
	let addDiv = document.createElement('div');
	addDiv.setAttribute('class', 'addDiv');
	document.body.appendChild(addDiv);
	
	let addText = document.createElement('h2');
	addText.setAttribute('class', 'addH2');
	addDiv.appendChild(addText);
	addText.textContent = 'Add here the value you want to add,only decimals and cents are allowed, any extra number will result in an approximation ';
	
	let addInput = document.createElement('input');
	addInput.setAttribute('class', 'addInput');
	addInput.setAttribute('type', 'text');
	addDiv.appendChild(addInput);



	let addDivComment = document.createElement('div');
	addDivComment.setAttribute('class', 'addDivComment');
	addDiv.appendChild(addDivComment);

	let addTextComment = document.createElement('h2');
	addTextComment.setAttribute('class', 'addH2Comment');
	addDiv.appendChild(addTextComment);
	addTextComment.textContent = 'Add here the reason you spent or gained this amount'

	let addInputComment = document.createElement('input');
	addInputComment.setAttribute('class', 'addInputComment');
	addInputComment.setAttribute('type', 'text');
	addDiv.appendChild(addInputComment);

	let addButtonComment = document.createElement('button');
	addButtonComment.setAttribute('class', 'addButtonComment');
	addDiv.appendChild(addButtonComment);
	addButtonComment.textContent = 'Push';

	addButtonComment.addEventListener('click', pushValue);

	function pushValue () {
		let value = document.querySelector('#value');
		let givenValue = addInput.value;
		let fixedValue = parseFloat(givenValue).toFixed(2);
		let range = /[^0-9-.]/;	

		let givenComment = addInputComment.value;

		if (givenValue.match(",")) {
			fixedValue = 0;
			alert('please use "." instead of "," and try again')

		} else if(givenValue.match(range)) {
			fixedValue = 0;
			alert('no characters are allowed!');
		
		} else if (!isNaN(fixedValue)) {
			value.textContent =  (parseFloat(value.textContent) - parseFloat(fixedValue)).toFixed(2).toString();

			if(givenComment !== '' || !null ){
			let record = document.createElement('div');
			record.setAttribute('class', 'record-container');	
			let index = document.querySelectorAll('.deleteIcon').length;	

			record.setAttribute('class', 'record-container');
			const deleteIcon = document.querySelector('#deleteIcon');
			let newDeleteIcon = deleteIcon.cloneNode(true);
			newDeleteIcon.setAttribute('class', 'deleteIcon');
			newDeleteIcon.style = ('display: block', 'width: 1.5%');
			record.setAttribute('id', index);
			newDeleteIcon.setAttribute('id', index);
			newDeleteIcon.addEventListener('click', function deleteRecord(){
				newDeleteIcon.parentNode.remove()
				value.textContent = parseFloat(value.textContent) + parseFloat(newDeleteIcon.parentNode.children[1].textContent.toString().substring(1));
			});

			let recordValue = document.createElement('h2');
			recordValue.textContent = '-' + fixedValue;
			recordValue.setAttribute('class', 'record-amount');
			recordValue.setAttribute('class', 'minus')

			let recordComment = document.createElement('p');
			recordComment.textContent = givenComment;
			recordComment.setAttribute('class', 'record-comment');

			recordSection.appendChild(record); record.appendChild(newDeleteIcon);
			record.appendChild(recordValue); record.appendChild(recordComment);
			}

		} else if (isNaN(fixedValue)) {
			fixedValue = 0;
			alert("The value you're giving is not a number");

		} else {
			alert('please check your value and try again');

		}
		addDiv.remove();
	}

 }

},[]);

	return(

		<div className='addFunds'>
			<FontAwesomeIcon icon={faPlusCircle} className='icon-addfunds' id='plus' />
			<FontAwesomeIcon icon={faMinusCircle} className='icon-addfunds' id='minus' />
			<FontAwesomeIcon icon={faTrashAlt} id='deleteIcon' />
		</div>

		);
}


 


export default AddFunds;