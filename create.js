const fs = require("fs");
const fsPromises = require("fs/promises");

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

async function createPathAsync(path) {
	try {
		await fsPromises.mkdir(path, {
			recursive: true,
		});
		return [true, "Folder created"];
	} catch (err) {
		return [false, "Folder not created"];
	}
}

module.exports = {
	createPath,
	createPathAsync,
};
