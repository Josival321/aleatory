"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.megumin = exports.random = exports.takagi = exports.mai = exports.nezuko = void 0;
const axios_1 = __importDefault(require("axios"));
const baseError_1 = __importDefault(require("../baseError"));
async function nezuko() {
    try {
        return await axios_1.default.get('https://kagchi-api.glitch.me/waifu/nezuko').then(x => x.data);
    }
    catch (e) {
        throw new baseError_1.default(`An error occured when fetching: ` + e);
    }
}
exports.nezuko = nezuko;
async function mai() {
    try {
        return await axios_1.default.get('https://kagchi.my.id/api/mai').then(x => x.data);
    }
    catch (e) {
        throw new baseError_1.default(`An error occured when fetching: ` + e);
    }
}
exports.mai = mai;
async function takagi() {
    try {
        return await axios_1.default.get('https://kagchi.my.id/api/takagi').then(x => x.data);
    }
    catch (e) {
        throw new baseError_1.default(`An error occured when fetching: ` + e);
    }
}
exports.takagi = takagi;
async function random() {
    try {
        return await axios_1.default.get('https://nekos.life/api/v2/img/waifu').then(x => x.data);
    }
    catch (e) {
        throw new baseError_1.default(`An error occured when fetching: ` + e);
    }
}
exports.random = random;
async function megumin() {
    try {
        return await axios_1.default.get('https://kagchi-api.glitch.me/waifu/megumin').then(x => x.data);
    }
    catch (e) {
        throw new baseError_1.default(`An error occured when fetching: ` + e);
    }
}
exports.megumin = megumin;
//# sourceMappingURL=waifu.js.map