"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.info = exports.us = exports.pt = exports.pl = exports.id = void 0;
const baseError_1 = __importDefault(require("../../baseError"));
const axios_1 = __importDefault(require("axios"));
async function id(query) {
    if (!query)
        throw new baseError_1.default('Input query to search.');
    try {
        return await axios_1.default.get('https://famouscomplicatedoutsourcing.darkforestbeep.repl.co/id/' + query).then(x => x.data);
    }
    catch (e) {
        throw new baseError_1.default(`An error occured when fetching: ` + e);
    }
}
exports.id = id;
async function pl(query) {
    if (!query)
        throw new baseError_1.default('Input query to search.');
    try {
        return await axios_1.default.get('https://famouscomplicatedoutsourcing.darkforestbeep.repl.co/pl/' + query).then(x => x.data);
    }
    catch (e) {
        throw new baseError_1.default(`An error occured when fetching: ` + e);
    }
}
exports.pl = pl;
async function pt(query) {
    if (!query)
        throw new baseError_1.default('Input query to search.');
    try {
        return await axios_1.default.get('https://famouscomplicatedoutsourcing.darkforestbeep.repl.co/pt/' + query).then(x => x.data);
    }
    catch (e) {
        throw new baseError_1.default(`An error occured when fetching: ` + e);
    }
}
exports.pt = pt;
async function us(query) {
    if (!query)
        throw new baseError_1.default('Input query to search.');
    try {
        return await axios_1.default.get('https://famouscomplicatedoutsourcing.darkforestbeep.repl.co/us/' + query).then(x => x.data);
    }
    catch (e) {
        throw new baseError_1.default(`An error occured when fetching: ` + e);
    }
}
exports.us = us;
exports.info = { id: "indonesia", pt: "portuguese", pl: "poland", us: "united states" };
//# sourceMappingURL=search.js.map