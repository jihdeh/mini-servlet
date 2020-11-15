"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var src_1 = __importDefault(require("../src"));
var _a = src_1.default(), app = _a.Servlets, Core = _a.Server;
app.get('/recipes', function (_req, _res, next) {
    // throw new Error('commp')
    next();
}, function (_req, _res, next) {
    // throw new Error('commp')
    next();
}, function (_req, res) {
    console.log('still comes to execute?');
    try {
        throw new Error('haba');
    }
    catch (e) {
        console.log(e);
        res.statusCode = 400;
        res.send(e.message);
    }
    // res.json(['recipes on grades']);
});
app.get('/recipes/:id', function (req, res) {
    console.log('not here?', req.params);
    res.json(req.query);
});
app.post('/recipes', function (_req, res) {
    res.json(['req.params']);
});
app.put('/recipes/:id', function (_req, res) {
    res.send('hey');
});
app.delete('/recipes', function (req, res) {
    res.send(req.body);
});
app.post('/recipes/:id/rating', function (req, res) {
    res.send(req.body);
});
app.listen(4000, function () {
    console.log('Server running on 4000');
});
module.exports = Core;
