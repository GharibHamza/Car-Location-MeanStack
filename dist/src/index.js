"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const car_description_model_1 = __importDefault(require("../model/car_description.model"));
const app = express_1.default();
const uri = "mongodb://localhost:27017/Agence";
mongoose_1.default.connect(uri, (err) => {
    if (err)
        console.log(err);
    else
        console.log("success");
});
app.get("/", (req, resp) => {
    resp.send("Hello Express");
});
app.get("/cardescription", (req, resp) => {
    car_description_model_1.default.find((err, cardescription) => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(cardescription);
    });
});
app.listen(8058, () => {
    console.log("Server started");
});
