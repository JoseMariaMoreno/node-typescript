"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// lib/app.ts
const express = require("express");
const helpers = require("./helpers");
// Create a new express application instance
const app = express();
app.get('/', (req, res) => {
    res.send(helpers.hello());
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
//# sourceMappingURL=app.js.map