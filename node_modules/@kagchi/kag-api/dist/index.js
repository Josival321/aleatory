"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.subreddit = exports.coronamemes = exports.dankmemes = exports.memes = exports.memeindo = exports.user = exports.coin = exports.waifu = exports.brainly = exports.anime = void 0;
const baseError_1 = __importDefault(require("./baseError"));
const axios_1 = __importDefault(require("axios"));
const animeEndpoints = __importStar(require("./endpoints/anime"));
const waifuEndpoints = __importStar(require("./endpoints/waifu"));
const brainlyEndpoints = __importStar(require("./endpoints/brainly/search"));
exports.anime = animeEndpoints;
exports.brainly = brainlyEndpoints;
exports.waifu = waifuEndpoints;
async function coin() {
    try {
        return await axios_1.default.get('https://kagchi-api.glitch.me/coin').then(x => x.data);
    }
    catch (e) {
        throw new baseError_1.default(`An error occured when fetching: ` + e);
    }
}
exports.coin = coin;
async function user() {
    try {
        return await axios_1.default.get('https://kagchi-api.glitch.me/users').then(x => x.data);
    }
    catch (e) {
        throw new baseError_1.default(`An error occured when fetching: ` + e);
    }
}
exports.user = user;
async function memeindo() {
    try {
        return await axios_1.default.get('https://kagchi-api.glitch.me/meme/indonesia').then(x => x.data);
    }
    catch (e) {
        throw new baseError_1.default(`An error occured when fetching: ` + e);
    }
}
exports.memeindo = memeindo;
async function memes() {
    try {
        return await axios_1.default.get('https://kagchi-api.glitch.me/meme/memes').then(x => x.data);
    }
    catch (e) {
        throw new baseError_1.default(`An error occured when fetching: ` + e);
    }
}
exports.memes = memes;
async function dankmemes() {
    try {
        return await axios_1.default.get('https://kagchi-api.glitch.me/meme/dankmemes').then(x => x.data);
    }
    catch (e) {
        throw new baseError_1.default(`An error occured when fetching: ` + e);
    }
}
exports.dankmemes = dankmemes;
async function coronamemes() {
    try {
        return await axios_1.default.get('https://kagchi-api.glitch.me/meme/coronamemes').then(x => x.data);
    }
    catch (e) {
        throw new baseError_1.default(`An error occured when fetching: ` + e);
    }
}
exports.coronamemes = coronamemes;
async function subreddit(query) {
    if (!query)
        throw new baseError_1.default('Input query to search.');
    try {
        return await axios_1.default.get('https://kagchi-api.glitch.me/subreddit/' + query).then(x => x.data);
    }
    catch (e) {
        throw new baseError_1.default(`An error occured when fetching: ` + e);
    }
}
exports.subreddit = subreddit;
//# sourceMappingURL=index.js.map