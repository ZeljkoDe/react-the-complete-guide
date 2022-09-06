import React, { useState } from 'react';
import UserForm from './components/UserForm/UserForm';
import Users from './components/Users/Users';

function App() {
	const [users, setUsers] = useState([{ name: 'Max', age: 31, id: 0 }]);

	const addUsers = (userName, userAge) => {
		setUsers((prevState) => {
			const addedUsers = [...prevState];
			addedUsers.unshift({
				name: userName,
				age: userAge,
				id: Math.random().toString(),
			});
			return addedUsers;
		});
	};

	return (
		<>
			<UserForm onAddUser={addUsers} />
			<Users users={users} />
		</>
	);
}

export default App;
