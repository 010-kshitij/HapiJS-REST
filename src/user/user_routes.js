'use strict'
const joi = require('@hapi/joi');
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
		handler: create,
		options: {
			description: "User Create",
			notes: "Creates a User",
			tags: ["api", "user"],
			validate: {
				payload: joi.object({
					name: joi.string().trim().required(),
					gender: joi.string().trim().required(),
					age: joi.number().required(),
				}),
			},
			plugins: {
				'hapi-swagger': {
					payloadType: 'form'
				}
			}
		},
	}
];
