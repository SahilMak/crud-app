/**
 * Created by Sahil Makhijani on 5/2/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Orders = new Schema({
    order_id: Schema.ObjectId,
    robot_id: String,
    robot_name: String,
    quantity: Number,
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
});

mongoose.model('orders', Orders);

mongoose.connect('mongodb://localhost/Orders');