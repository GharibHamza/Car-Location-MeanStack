"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
let car_descriptionSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    year: { type: Number, required: true },
    mileage: { type: Number, required: true },
    hourly_price: { type: Number, required: true },
    daily_price: { type: Number, required: true }
});
car_descriptionSchema.plugin(mongoose_paginate_1.default);
const car_description = mongoose_1.default.model("car_description", car_descriptionSchema);
exports.default = car_description;
