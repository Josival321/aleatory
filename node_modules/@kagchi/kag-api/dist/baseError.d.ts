export default class apiError extends Error {
    message: string;
    constructor(message: string);
    name: string;
}
