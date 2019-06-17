/* jshint node: true */
"use strict";

exports.getPing = function(req, res) {
    const name = "name";
    const description = "description";
    const version = "version";
    return res.json({
        name,
        description,
        version,
        uptime: process.uptime()
    });
}