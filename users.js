const users = [];

const addUser = ({ id, name, room }) => {
	name = name.trim().toLowerCase();
	room = room.trim().toLowerCase();

	const existingUser = users.find(
		(users) => users.name === name && users.room === room
	);
	if (existingUser) {
		return { error: 'UserName is taken' };
	}
	const user = { id, name, room };
	users.push(user);

	return { user };
};

const removeUser = ({ id }) => {
	const index = users.findIndex((users) => users.id === id);

	if (index !== -1) {
		return users.splice(index, 1)[0];
	}
};

const getUser = (id) => users.find((users) => users.id === id);

const getUsersInRoom = (room) => users.filter((users) => users.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
