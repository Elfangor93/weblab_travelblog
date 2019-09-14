var baseView = require('./baseView');
var blogsView = require('./blogsView');
var blogView = require('./blogView');

var classes = {
	blogsView,
	blogView
}

class dynView {
	constructor (className, opts) {
		if (classes[className] !== undefined) {
			return new classes[className](opts);
		} else {
			return new baseView(opts);
		}		
	}
}

module.exports = dynView;