"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const car_description_model_1 = __importDefault(require("./car_description.model"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = express_1.default();
app.use(body_parser_1.default.json());
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
app.get("/cardescription/:id", (req, resp) => {
    car_description_model_1.default.findById(req.params.id, (err, cardescription) => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(cardescription);
    });
});
app.post("/cardescription", (req, resp) => {
    let cardescription = new car_description_model_1.default(req.body);
    cardescription.save(err => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(cardescription);
    });
});
app.put("/cardescription/:id", (req, resp) => {
    car_description_model_1.default.findByIdAndUpdate(req.params.id, req.body, (err) => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send("car modifié");
    });
});
app.delete("/cardescription/:id", (req, resp) => {
    car_description_model_1.default.findByIdAndRemove(req.params.id, (err) => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send("car supprimé");
    });
});
/* GET http://localhost:8058/pcardescription?page=1&size=5 */
app.get("/pcardescription", (req, resp) => {
    let p = parseInt(req.query.page || 1);
    let size = parseInt(req.query.size || 5);
    car_description_model_1.default.paginate({}, { page: p, limit: size }, (err, cardescription) => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(cardescription);
    });
});
/* GET http://localhost:8058/cardescription-search?kw=page=1&size=5 */
app.get("/cardescription-search", (req, resp) => {
    let p = parseInt(req.query.page || 1);
    let size = parseInt(req.query.size || 5);
    let kw = req.query.kw || "";
    car_description_model_1.default.paginate({ name: { $regex: ".*" + kw + ".*" } }, { page: p, limit: size }, (err, cardescription) => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(cardescription);
    });
});
app.listen(8058, () => {
    console.log("Server started");
});
