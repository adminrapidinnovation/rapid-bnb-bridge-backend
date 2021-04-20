const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/rapid_test",{ useNewUrlParser: true }, (err)=>{
	if(!err){
		console.log('Mongo DB Connected successfully.');
	}else{
		console.log(err)
	}
});

