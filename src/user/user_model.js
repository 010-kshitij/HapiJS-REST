const mongoose = require("mongoose");

const User = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		default: null,
		sparse: true
	},
	gender: {
		type: String,
		trim: true,
		default: null,
		sparse: true
	},
	age: {
		type: Number,
		trim: true,
		default: null,
		sparse: null
	}
});

module.exports = mongoose.model('User', User);
