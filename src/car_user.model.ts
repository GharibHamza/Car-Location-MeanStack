import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'

let car_userSchema = new mongoose.Schema({
    name : {type :String ,required:true},
    email : {type :String , required:true},
    address : {type :String , required:true},
    phone : {type : Number , required:true},
    isverified : {type :String , required:true},
    status : {type :String , required:true},
    password : {type :String , required:true}

});
car_userSchema.plugin(mongoosePaginate);
const car_user = mongoose.model("car_user",car_userSchema);
export default car_user
