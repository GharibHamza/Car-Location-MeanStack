import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'
import car_categoryModel from "./car_category.model";

let car_descriptionSchema = new mongoose.Schema({
    name : {type :String ,required:true},
    description : {type :String , required:true},
    year : {type : Number , required:true},
    images : {type :String , required:true},
    mileage : {type : Number , required:true},
    hourly_price : {type : Number , required:true},
    daily_price : {type : Number , required:true},
    car_category_id : {type :car_categoryModel , required:true},

});
car_descriptionSchema.plugin(mongoosePaginate);
const car_description = mongoose.model("car_description",car_descriptionSchema);
export default car_description
