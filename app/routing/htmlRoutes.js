/**
 * Created by hanifa on 4/22/17.
 */

var express = require('express');
var router = express.Routes();

router.route()
            get("/survey")
            .res.status(200).sendFile("survey.html");
