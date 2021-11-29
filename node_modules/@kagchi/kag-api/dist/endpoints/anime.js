"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = exports.smug = exports.slap = exports.hug = exports.cuddle = exports.kiss = exports.poke = exports.trap = exports.feed = exports.pat = exports.baka = void 0;
const axios_1 = __importDefault(require("axios"));
const baseError_1 = __importDefault(require("../baseError"));
const nekosLifeBaseURI = 'https://nekos.life/api/v2/img';
async function baka() {
    try {
        return await axios_1.default.get(nekosLifeBaseURI + '/baka').then(x => x.data);
    }
    catch (e) {
        throw new baseError_1.default(`An error occured when fetching: ` + e);
    }
}
exports.baka = baka;
async function pat() {
    try {
        return await axios_1.default.get(nekosLifeBaseURI + '/pat').then(x => x.data);
    }
    catch (e) {
        throw new baseError_1.default(`An error occured when fetching: ` + e);
    }
}
exports.pat = pat;
async function feed() {
    try {
        return await axios_1.default.get(nekosLifeBaseURI + '/feed').then(x => x.data);
    }
    catch (e) {
        throw new baseError_1.default(`An error occured when fetching: ` + e);
    }
}
exports.feed = feed;
async function trap() {
    try {
        return await axios_1.default.get(nekosLifeBaseURI + '/feed').then(x => x.data);
    }
    catch (e) {
        throw new baseError_1.default(`An error occured when fetching: ` + e);
    }
}
exports.trap = trap;
async function poke() {
    try {
        return await axios_1.default.get(nekosLifeBaseURI + '/poke').then(x => x.data);
    }
    catch (e) {
        throw new baseError_1.default(`An error occured when fetching: ` + e);
    }
}
exports.poke = poke;
async function kiss() {
    try {
        return await axios_1.default.get(nekosLifeBaseURI + '/kiss').then(x => x.data);
    }
    catch (e) {
        throw new baseError_1.default(`An error occured when fetching: ` + e);
    }
}
exports.kiss = kiss;
async function cuddle() {
    try {
        return await axios_1.default.get(nekosLifeBaseURI + '/cuddle').then(x => x.data);
    }
    catch (e) {
        throw new baseError_1.default(`An error occured when fetching: ` + e);
    }
}
exports.cuddle = cuddle;
async function hug() {
    try {
        return await axios_1.default.get(nekosLifeBaseURI + '/hug').then(x => x.data);
    }
    catch (e) {
        throw new baseError_1.default(`An error occured when fetching: ` + e);
    }
}
exports.hug = hug;
async function slap() {
    try {
        return await axios_1.default.get(nekosLifeBaseURI + '/slap').then(x => x.data);
    }
    catch (e) {
        throw new baseError_1.default(`An error occured when fetching: ` + e);
    }
}
exports.slap = slap;
async function smug() {
    try {
        return await axios_1.default.get(nekosLifeBaseURI + '/smug').then(x => x.data);
    }
    catch (e) {
        throw new baseError_1.default(`An error occured when fetching: ` + e);
    }
}
exports.smug = smug;
async function search(name) {
    try {
        return await axios_1.default.get('https://api.jikan.moe/v3/search/anime?q=' + name).then(x => x.data);
    }
    catch (e) {
        throw new baseError_1.default(`An error occured when fetching: ` + e);
    }
}
exports.search = search;
//# sourceMappingURL=anime.js.map