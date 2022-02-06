const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");

const dataSchema = new mongoose.Schema({
    
    employee_name: {
        type: String,
        required: true
    },
    employee_Mobile: {
        type: String,
        required: true
    },
    employee_Email: {
        type: String,
        required: true
    },
	employee_Address: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('datas', dataSchema)