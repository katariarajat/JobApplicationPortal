const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const JobSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
    },
    title: {
		type: String,
		required: true
    },
    noofposition : {
		type: String,
		required: true
    },
    noofapplicant: {
		type: String,
		required: true
    },
    deadline: {
		type: String,
		required: true
    },
    language: {
		type: String,
		required: true
    },
    typeofjob: {
		type: String,
		required: true
    },
    duration :{
        type: String,
        required:true
    },
    salary:{
        type : String,
        required:true
    },
    appliednumber:{
        type: String
    },
    fulled:{
        type: Boolean,
    },
    applicants:{
        type: [String]
    },
	date:{
		type: Date
	}
});

module.exports = Job = mongoose.model("Job", JobSchema);
