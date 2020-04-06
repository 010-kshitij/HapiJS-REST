module.exports = [
	{
		method: 'GET',
		path: '/login',
		handler: (request, h) => {
			return 'login routes';
		}
	},
	{
		method: 'GET',
		path: '/register',
		handler: (request, h) => {
			return 'register routes';
		}
	}
];
