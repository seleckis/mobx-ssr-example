var express = require('express');

const app = express();

app.get('/foobar', function (req, res, next) {
	var data = {
		items: [
			'Item1',
			'Item2'
		]
	};

	res.send(data);
	//res.jsonp(object);

});

app.listen(3030);
