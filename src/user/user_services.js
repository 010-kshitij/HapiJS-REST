const User = require('./user_model');

module.exports = {
	create: data => {
		let user = new User(data);
		return user.save();
	}
};
