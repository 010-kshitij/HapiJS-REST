const { sayHello, create } = require("./user_controller");

module.exports = [
	{
		method: 'GET',
		path: '/',
		handler: sayHello
	},
	{
		method: 'GET',
		path: '/another',
		handler: (request, h) => {
			return 'another from user routes';
		}
	},
	{
		method: 'POST',
		path: '/user',
		handler: create
	}
];
