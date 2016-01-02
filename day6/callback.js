var fs = require('fs');

fs.exists('./copy.txt', function ( exists) {
	if(exists) {
		console.log("it's there");
		fs.readFile('./copy.txt', "utf-8", function ( err, data) {
			if (err) throw err;
			fs.writeFile('paste.txt', data, function (err) {
				if (err) throw err;
				console.log('It\'s saved!');
			});
	
		});
	} else {
		console.log("it's noty exists");
	}
});