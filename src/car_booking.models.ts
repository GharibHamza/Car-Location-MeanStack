import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'
import car_user from "./car_user.model";
import car_category from "./car_category.model";

let car_bookingSchema = new mongoose.Schema({
    car_category_id : {type :car_category , required:true},
    order_number : {type :String ,required:true},
    total_cost : {type :Number , required:true},
    start_date : {type : Date , required:true},
    end_date : {type : Date , required:true},
    user_id : {type : car_user , required:true},
    payment_status : {type : Number , required:true},
    daily_price : {type : Number , required:true},

});
car_bookingSchema.plugin(mongoosePaginate);
const car_booking = mongoose.model("car_booking",car_bookingSchema);
export default car_booking
