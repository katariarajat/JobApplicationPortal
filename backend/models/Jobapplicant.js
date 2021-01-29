const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const JobapplicantSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
    },
    language:{
        type:String,
    },
    college:{
        type:String
    },
    school: {
		type: String
    },
    csy: {
		type: String
    },
    cey: {
		type: String
    },
    ssy :{
        type: String
    },
    sey:{
        type : String
    },
    sop:{
        type: String
    },
	date:{
		type: Date
	}
});

module.exports = Jobapplicant = mongoose.model("Jobapplicant", JobapplicantSchema);
