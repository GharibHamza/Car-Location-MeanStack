"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
let car_userSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: Number, required: true },
    isverified: { type: String, required: true },
    status: { type: String, required: true },
    password: { type: String, required: true }
});
car_userSchema.plugin(mongoose_paginate_1.default);
const car_description = mongoose_1.default.model("car_user", car_userSchema);
exports.default = car_user;
