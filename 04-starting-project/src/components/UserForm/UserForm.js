import { useState } from 'react';
import Card from '../UI/Card';
import './UserForm.css';

const UserForm = ({ onAddUser }) => {
	const [userName, setUserName] = useState('');
	const [userAge, setUserAge] = useState('');

	const handleUserName = (e) => {
		setUserName(e.target.value);
	};

	const handleUserAge = (e) => {
		setUserAge(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onAddUser(userName, userAge);

		setUserAge('');
		setUserName('');
	};

	return (
		<Card>
			<form onSubmit={handleSubmit} className="user-form">
				<div className="user-form__input">
					<label>Username</label>
					<input
						onChange={handleUserName}
						type="text"
						value={userName}
					/>
				</div>
				<div className="user-form__input">
					<label>Age(years)</label>
					<input
						onChange={handleUserAge}
						type="text"
						value={userAge}
					/>
				</div>

				<button className="user-form__buton" type="submit">
					Add User
				</button>
			</form>
		</Card>
	);
};

export default UserForm;
