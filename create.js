const fs = require("fs");

function createPath(path = "", cb) {
	if (!path.length) return false;
	fs.mkdir(
		path,
		{
			recursive: true,
		},
		(err) => {
			cb(err ? false : true, path);
		}
	);
}

module.exports = {
	createPath,
};
