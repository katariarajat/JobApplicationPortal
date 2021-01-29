var express = require("express");
var router = express.Router();

// Load User model
const User = require("../models/Users");
const Job = require("../models/jobsdetail");
const Jobapplicant = require("../models/Jobapplicant");


// GET request 
// Getting all the users
router.get("/", function(req, res) {
    User.find(function(err, users) {
		if (err) {
			console.log(err);
		} else {
			res.json(users);
		}
	})
});

router.get("/jobs", function(req, res) {
    console.log("jobs");
    Job.find(function(err, job) {
		if (err) {
            console.log("errrorrr");
			console.log(err);
		} else {
			res.json(job);
		}
	})
});


// NOTE: Below functions are just sample to show you API endpoints working, for the assignment you may need to edit them

// POST request 
// Add a user to db
router.post("/register", (req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        date: req.body.date
    });

    newUser.save()
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.delete("/deletejob/:title",(req,res)=>{
    console.log(req.params.title);
    Job.deleteOne({title : req.params.title}).then(function(){ 
        console.log("Data deleted"); // Success 
    }).catch(function(error){ 
        console.log(error); // Failure 
    }); 
});


router.post("/jobapplicant", (req, res) => {
    console.log(req.body);
    const newUser = new Jobapplicant({
        name: req.body.name,
            email: req.body.email,
            language: req.body.language,
            college:req.body.college,
            school:req.body.school,
            csy: req.body.csy,
            cey:req.body.cey,
            ssy:req.body.ssy,
            sey:req.body.sey,
            rating:req.body.rating,
            sop : req.body.sop,
            date : req.body.date
    });
    if(req.body.date > Date.now())
    {
        res.send("expired");
    }

    
    Job.findOne({title : req.body.title},function(err, user){
        if(err){
          console.log(err);
          res.send("no such job ");
        }
        else{
            if(user.applicants.includes(req.body.email))
            {
                console.log("is present");
                res.send("you have already applied");
            }
            
            user.applicants.push(req.body.email);
            console.log(user.applicants); 
            newUser.save()
            .then(job => {
                console.log(job);
                res.status(200).json(job);
            })
            .catch(err => {
                console.log(err);
                res.status(400).send(err);
            });
        }
      });
    });

router.post("/createjob", (req, res) => {
    console.log(req.body);
    const newUser = new Job({
        name: req.body.name,
            email: req.body.email,
            title: req.body.title,
            noofposition:req.body.noofposition,
            noofapplicant:req.body.noofapplicant,
            deadline: req.body.deadline,
            language:req.body.language,
            typeofjob:req.body.typeofjob,
            duration:req.body.duration,
            salary:req.body.salary,
            date : req.body.date,
            appliednumber : '0',
            fulled: false,
    });
    Job.findOne({title : req.body.title},function(err, user){
        if(err){
          console.log(err);
          res.send("user already exists");
        }
        else{
            newUser.save()
            .then(job => {
                console.log(job);
                res.status(200).json(job);
            })
            .catch(err => {
                console.log(err);
                res.status(400).send(err);
            });
        }
      });
    });


// POST request 
// Login
router.post("/login", (req, res) => {
	const email = req.body.email;
	// Find user by email
	User.findOne({ email }).then(user => {
		// Check if user email exists
		if (!user) {
			return res.status(404).json({
				error: "Email not found",
			});
        }
        else{
            res.send("Email Found");
            return user;
        }
	});
});


module.exports = router;

