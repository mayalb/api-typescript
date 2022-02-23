"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var index_controllers_1 = require("../controllers/index.controllers");
var routes = (0, express_1.Router)();
routes.get('/annotations', index_controllers_1.getAnnotations);
routes.post('/annotations', index_controllers_1.addAnnotation);
routes.get('/test', function (req, res) { return res.send('working..'); });
module.exports = routes;
