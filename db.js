/**
 * Created by Sahil Makhijani on 5/2/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uri = process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://sahilmak:dbpass@ds129281.mlab.com:29281/heroku_xc5rr0jk';

var Orders = new Schema({
    order_id: Schema.ObjectId,
    robot_id: String,
    robot_name: String,
    quantity: Number,
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
});

mongoose.model('orders', Orders);

mongoose.connect(uri, function (err, res) {
    if (err) {
        console.log('ERROR: ' + err)
    }
    else {
        console.log('Connection successful!');
    }
});