const db = require('../data/db-config');
const encrypt = require('bcryptjs');

function getUsers() {
	return db('users');
}

function getUsersByID(user_id) {
	return db('users').where
}

module.exports = {
	getUsers,
};
