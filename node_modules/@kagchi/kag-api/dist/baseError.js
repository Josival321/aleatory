"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class apiError extends Error {
    constructor(message) {
        super();
        this.message = message;
        this.name = 'apiError';
    }
}
exports.default = apiError;
//# sourceMappingURL=baseError.js.map