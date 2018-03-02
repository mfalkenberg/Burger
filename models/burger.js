var orm = require("../config/orm.js");

var burger = {
	selectAll: function (cb) {
		orm.selectAll("burgers", function(res) {
			cb(res);
		});
	},

	insertOne: function(cols, vals, cb) {
		// INSERT INTO (cols) VALUES (vals)
		orm.insertOne("burgers", cols, vals, function(res) {
			console.log("scheisse");
			cb(res);
		});
	},
	updateOne: function(objColVals, condition, cb) {
		// UPDATE burgers SET objColVals, 
		orm.updateOne("burgers", objColVals, condition, function(res) {
			 cb(res);
		});
	}
};

module.exports = burger;