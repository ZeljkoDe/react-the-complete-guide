import Card from '../UI/Card';
import './Users.css';

const Users = ({ users }) => {
	return (
		<Card>
			{users.map((user) => (
				<p key={user.id} className="user">
					{user.name} ({user.age} years old)
				</p>
			))}
		</Card>
	);
};

export default Users;
