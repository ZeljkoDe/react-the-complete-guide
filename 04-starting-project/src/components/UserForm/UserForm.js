import Card from '../UI/Card';
import './UserForm.css';
import UserInput from './UserInput';

const UserForm = () => {
	
	const onSubmit = () => {

	}
	return (
		<Card>
			<form className="user-form">

				<UserInput labelText={'Username'} />
				<UserInput labelText={'Age(years)'} />

				<button className="user-form__buton" type="submit">
					Add User
				</button>
			</form>
		</Card>
	);
};

export default UserForm;
