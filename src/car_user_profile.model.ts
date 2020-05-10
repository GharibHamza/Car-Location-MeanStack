import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'
import car_user from "./car_user.model";

let car_user_profileSchema = new mongoose.Schema({
    car_user_id : {type :car_user ,required:true},
    avatar : {type :String , required:true},
    text : {type :String , required:true},

});
car_user_profileSchema.plugin(mongoosePaginate);
const car_user_profile = mongoose.model("car_user_profile",car_user_profileSchema);
export default car_user_profile
