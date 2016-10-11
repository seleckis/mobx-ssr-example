var express = require('express');

const app = express();

app.get('/foobar', function (req, res, next) {
	var object = {
		foobar: 'api foobar'
	};

	res.send(object);
	//res.jsonp(object);

});

app.listen(3030);