const fs = require('fs');
const data = require('./extData');

/**
 * 同步getFileList方法
 * @param { string } path 
 * @param { Function } callback 
 */
function getFileListSync(path, callback) {
	let files = [], folders = [];
	path = `${__dirname}/${path}`;
	let result = fs.readdirSync(path);
	for (let i = 0; i < result.length; i++) {
		if (result[i][0] != '.' && result[i][0] != '_') {
			if (fs.statSync(`${path}/${result[i]}`).isDirectory()) {
				folders.push(result[i]);
			} else {
				files.push(result[i]);
			}
		}
	}
	callback(folders, files);
}

async function getExtFiles(ext) {
	let list = [];
	let size = 0;
	function getSize(path) {
		return fs.statSync(path).size;
	}
	getFileListSync(ext, (folders, files) => {
		let foldersList = folders, filesList = files;

		function callback(name, folders, files) {
			for (let i = 0; i < files.length; i++) {
				const p = `${name}/${files[i]}`;
				size += getSize(p);
				list.push(p);
			}
			for (let i = 0; i < folders.length; i++) {
				getFileListSync(`${name}/${folders[i]}`, (newFolders, newFiles) => {
					callback(`${name}/${folders[i]}`, newFolders, newFiles);
				});
			}
		}
		for (let i = 0; i < filesList.length; i++) {
			const p = `${ext}/${files[i]}`;
			size += getSize(p);
			list.push(p);
		}

		for (let i = 0; i < foldersList.length; i++) {
			getFileListSync(`${ext}/${foldersList[i]}`, (folders, files) => {
				callback(`${ext}/${foldersList[i]}`, folders, files);
			});
		}
	});
	return { list, size };
}

const parseSize = function (limit) {
	let size = "";
	if (limit < 1 * 1024) {
		// 小于1KB，则转化成B
		size = `${limit.toFixed(2)}B`;
	} else if (limit < 1 * 1024 * 1024) {
		// 小于1MB，则转化成KB
		size = `${(limit / 1024).toFixed(2)}KB`;
	} else if (limit < 1 * 1024 * 1024 * 1024) {
		// 小于1GB，则转化成MB
		size = `${(limit / (1024 * 1024)).toFixed(2)}MB`;
	} else {
		// 其他转化成GB
		size = `${(limit / (1024 * 1024 * 1024)).toFixed(2)}GB`;
	}

	// 转成字符串
	let sizeStr = `${size}`;
	// 获取小数点处的索引
	let index = sizeStr.indexOf(".");
	// 获取小数点后两位的值
	let dou = sizeStr.slice(index + 1, 2);
	// 判断后两位是否为00，如果是则删除00
	if (dou == "00") {
		return sizeStr.slice(0, index) + sizeStr.slice(index + 3, 2);
	}
	return size;
};

const extData = data.extension;

const promiseList = Object.keys(extData).map(async name => {
	const { list, size } = await getExtFiles(`extension/${name}`);
	extData[name].files = list;
	extData[name].size = parseSize(size);
});

Promise.all(promiseList).then(() => {
	console.log(extData);
	// console.log(extData.大乱桌斗.files);
	// fs.writeFileSync(__dirname + '/extension/大乱桌斗/updateFiles.js', `${extData.大乱桌斗.files.filter(v => v != 'extension/大乱桌斗/updateFiles.js').map(v => `"${v.slice(15)}"`).join(',\n')}`);
	// console.log(extData.天牢令.files);
	// fs.writeFileSync(__dirname + '/extension/天牢令/updateFiles.js', `${extData.天牢令.files.filter(v => v != 'extension/天牢令/updateFiles.js').map(v => `"${v.slice(14)}"`).join(',\n')}`);
	fs.writeFileSync(`${__dirname}/update.js`, `window["noname_android_extension"] = ${JSON.stringify(extData, null, '\t')};`);
});

// node gainFileList.js