import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = ({ onAddUser }) => {
	const [enteredUserName, setEnteredUserName] = useState('');
	const [enteredAge, setEnteredAge] = useState('');
	const [error, setError] = useState();

	const addUserHandler = (e) => {
		e.preventDefault();

		if (
			enteredUserName.trim().length === 0 ||
			enteredAge.trim().length === 0
		) {
			setError({
				title: 'Invalid input',
				msg: 'Please enter a valid name and age (non-empty values)',
			});
			return;
		}

		if (+enteredAge < 1) {
			setError({
				title: 'Invalid input',
				msg: 'Please enter a valid age (>0)',
			});
			return;
		}

		onAddUser(enteredUserName, enteredAge);
		setEnteredUserName('');
		setEnteredAge('');
	};

	const usernameChangeHanlder = (e) => {
		setEnteredUserName(e.target.value);
	};

	const ageChangeHanlder = (e) => {
		setEnteredAge(e.target.value);
	};

    const errorHandler = () => {
        setError(null)
    }

	return (
		<>
			{error && <ErrorModal onConfirm={errorHandler} title={error.title} msg={error.msg} />}
			<Card className={classes.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username">Username</label>
					<input
						type="text"
						id="username"
						onChange={usernameChangeHanlder}
						value={enteredUserName}
					/>
					<label htmlFor="age">Age(Years)</label>
					<input
						type="number"
						id="age"
						onChange={ageChangeHanlder}
						value={enteredAge}
					/>
					<Button type="submit">Add user</Button>
				</form>
			</Card>
		</>
	);
};

export default AddUser;
