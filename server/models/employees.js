const mongoose = require('mongoose');

const { Schema } = mongoose;

const EmployeesSchema = new Schema({
    name:{ type:String, required:true},
    position:{ type:String, required:true},
    office:{ type:String, required:true},
    salary:{ type:String, required:true}
});

module.exports = mongoose.model('Employees',EmployeesSchema);