import './UserInput.css';

const UserInput = ({ labelText }) => {
	return (
		<div className='user-form__input'>
			<label>{labelText}</label>
			<input type="text" />
		</div>
	);
};

export default UserInput;
