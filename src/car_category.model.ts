import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'

let car_categorySchema = new mongoose.Schema({
    name : {type :String ,required:true},
    picture : {type :String , required:true},

});
car_categorySchema.plugin(mongoosePaginate);
const car_category = mongoose.model("car_category",car_categorySchema);
export default car_category
