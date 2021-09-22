module.exports = function(grunt) {
	var path = require("path");

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),

		forever: {
			options: {
				index: path.join(__dirname,"server.js")
			}
		},
		watch: {
			...
		}
	});

	// Load the plugins
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks('grunt-forever');

	// define tasks
	grunt.registerTask("server-shutdown-listener",function(){
		process.on("SIGINT",function(){
			console.log("");
			console.log("Shutting down server...");

			require("child_process").exec(
				path.join(__dirname, "node_modules", ".bin", "forever stop \"" + path.join(__dirname,"server.js") + "\""),
				function(err,stdout,stderr) {
					console.log(stdout);
					if (stderr) {
						console.log(stderr);
					}
					if (err !== null) {
						console.log(err);
					}
					console.log("Server shutdown complete.");
					process.exit();
				}
			);
		});
	});

	grunt.registerTask("dev", [
		"forever:start",
		"server-shutdown-listener",
		"watch"
	]);
};
