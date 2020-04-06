const { create } = require('./user_services');

module.exports = {
	sayHello: (request, h) => {
		return "this is from controller of the user";
	},
	create: async (request, h) => {
		if(await create(request.payload))
			return h.response().code(200);
		return h.response({message: "There is some error"}).code(500);
	}
};
