"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const getYear = (date) => {
    return `${date.getFullYear()}`;
};
app.get("/", (req, res) => {
    const year = getYear(new Date());
    res.send(`Hello World ! ${year}`);
});
app.listen(3000, () => {
    console.log("App listening on port 3000!");
});
//# sourceMappingURL=index.js.map