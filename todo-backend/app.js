const express = require('express');
const fetch = require('node-fetch');
const bluebird = require('bluebird');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const verify = require('./verifytoken.js')
const { bucketValidation , loginValidation } = require('./validation.js');


const mongoose = require('./mongoose.js')(bluebird);

const Bucket = require('./models/bucket.model.js');

const app = express();
app.use(cors());
app.use(bodyParser.json());


fetch.Promise = bluebird;

const port = 3000;

const getName = (id) => {
	let name = `Mike id is ${id}`;
	return name;
}

const getArticle = (req,res) => {
	fetch('https://jsonplaceholder.typicode.com/posts/'+req.params.id)
		.then((res) => res.json())
		.then(json => {
			res.status(200).send(json)
		})
		.catch((err) => {
			console.log(err);
		})
}

const postArticle = (req,res) => {

	if(!req.body.title){
		return res.status(400).send('Invalid request');
	}

	let request =  {
      title: req.body.title,
      body: req.body.body,
      userId: req.body.id
    }


	let options = {
	    method: 'POST',
	    body: JSON.stringify(request),
	    headers: {
	      "Content-type": "application/json; charset=UTF-8"
	    }
	}

	fetch('https://jsonplaceholder.typicode.com/posts',options)
		.then((res) => res.json())
		.then(json => {
			res.status(200).send(json)
		})
		.catch((err) => {
			res.status(500).send(err)
		})
}

const getAllArticles = (req,res) => {
	fetch('https://jsonplaceholder.typicode.com/posts/')
		.then((res) => res.json())
		.then(json => {
			res.status(200).send(json)
		})
		.catch((err) => {
			console.log(err);
		})
}



const addBucket = (req,res) => {


	if(!req.body.bucketName){
		return res.status(400).send("Invalid request");
	}

	const { error } = bucketValidation(req.body);
	if(error) return res.status(400).send(error.details[0].message);

	let bucket = new Bucket({
		bucketName: req.body.bucketName
	});

	bucket.save()
		.then((response) => {
			res.status(200).send(response);
			//mongoose.connection.close();
		})
		.catch(err => {
			res.status(500).send(err);
		})
}

const loginUser = async (req,res) => {

	if(!req.body.userid){
		return res.status(400).send("Invalid request");
	}

	const { error } = loginValidation(req.body);
	if(error) return res.status(400).send(error.details[0].message);

	const user = await User.findOne({ userId : req.body.userid})
	if(!user) return res.status(400).send('Invalid Email');

	if(user.password !== req.body.password)
	return 	res.status(400).send('Invalid pass');

	var token = jwt.sign({ _id: user._id },'Test123'); 
	return res.header('auth-token'.token).send(token);
}

app.listen(port, () => {
	console.log(`Server runing on port ${port}`);
})




app.get('/user/:id' , (req,res) => {
	let id = req.params.id 
	res.send(getName(id));
})

app.get('/article/:id', verify , getArticle)

app.get('/article',getAllArticles)

app.post('/article',postArticle)

app.post('/api/bucket',addBucket)


module.exports = app;