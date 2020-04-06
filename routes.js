const fs = require('fs');
const components = __dirname + "/src/";

const register = server => {
	return new Promise(resolve => {
		fs.readdirSync(components).forEach(component => {
			let route = require(components + "/" + component + "/" + component + "_routes");
			server.route(route);
		});
		resolve();
	});
};

module.exports = {register}
