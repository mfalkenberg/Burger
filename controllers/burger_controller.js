var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// GET to www.domain.de/
router.get("/", function (req, res) {
	burger.selectAll(function(data) {
		var object = {
			burgers: data
		};
		console.log(object);
		res.render("index", object);
	});
});

// POST to www.domain.de/
router.post("/", function(req, res) {
	var cols = ["burger_name", "devoured"];
	var vals = [req.body.burger_name, req.body.devoured];
	var cb = function() {
		res.redirect("/");
		};
	burger.insertOne(cols, vals, cb);
});

// POST to www.domain.de/1
router.post("/:id", function(req, res) {
	var objColVals = {devoured: req.body.devoured};
  	var condition = "id = " + req.params.id; // re.params.id == :id
  	var cb = function() {
    	res.redirect("/");
  		};
  burger.updateOne(objColVals, condition, cb);
    
});

// Export routes for server.js to use.
module.exports = router;