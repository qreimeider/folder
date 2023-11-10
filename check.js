const fs = require("fs");
const fsPromises = require("fs/promises");

function checkPath(path = "", cb) {
	if (!path.length) return false;
	fs.access(path, fs.constants.F_OK, (err) => {
		cb(err ? false : true, path);
	});
}

async function checkPathAsync(path = undefined) {
	if (!path) return undefined;
	try {
		await fsPromises.access(path, fsPromises.constants.R_OK);
		return true;
	} catch (_) {
		return false;
	}
}

module.exports = {
	checkPath,
	checkPathAsync,
};
