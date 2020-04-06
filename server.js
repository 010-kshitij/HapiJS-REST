'use strict'
const Hapi = require('@hapi/hapi');
const config = require('./config');
const routes = require("./routes");
let mongoose;
if(config.database.url.trim() !== "")
	mongoose = require('mongoose');

const init = async () => {
	const server = Hapi.server({
		port: 3000,
		host: '0.0.0.0'
	});

	// Including Database connection
	if(config.database.url.trim() !== "") {
		mongoose.connect(config.database.url, {useNewUrlParser: true, useUnifiedTopology: true});
		console.log("Database connected");
	}
	// End Including Database connection

	// Including Routes
	await routes.register(server);
	// End Including Routes

	await server.start();
	console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', error => {
	console.log(error);
	process.exit();
});

// Start process
init();
