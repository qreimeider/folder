const fs = require("fs");

function checkPath(path = "", cb) {
	if (!path.length) return false;
	fs.access(path, fs.constants.F_OK, (err) => {
		cb(err ? false : true, path);
	});
}

module.exports = {
	checkPath,
};
