"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var index_1 = __importDefault(require("./index"));
var config_1 = __importDefault(require("./config"));
index_1["default"].listen(config_1["default"].port, function () {
    console.log("Server listening on port ".concat(config_1["default"].port));
});
