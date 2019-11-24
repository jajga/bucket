const express = require('express');
const fetch = require('node-fetch');
const bluebird = require('bluebird');
const cors = require('cors');
const bodyParser = require('body-parser');
const { bucketValidation , todoValidation  } = require('./validation.js');


const mongoose = require('./mongoose.js')(bluebird);

const Bucket = require('./models/bucket.model.js');
const Todos = require('./models/todo.model.js');

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

const fetchBuckets = (req,res) => {
	Bucket.find()
		.then(data => {
			res.status(200).send(data)
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

const fetchToDo = (req,res) => {
	if(!req.params.bucketId){
		return res.status(400).send("Invalid request");
	}
	Bucket.findById(req.params.bucketId).then((model) => {
		res.status(200).send(model.todoList);
	}).catch((err) => {
		res.status(500).send(err);
	});
}

const addToDo = (req,res) => {
	if(!req.body.bucketId){
		return res.status(400).send("Invalid request");
	}
	const { error } = todoValidation(req.body);
	if(error) return res.status(400).send({resCode:0,err:error.details[0].message});

	let todo = new Todos({
		todoTitle:req.body.todoTitle,
		todoStatus:req.body.todoStatus
	})

	Bucket.findById(req.body.bucketId).then((model) => {
		return Object.assign(model,model.todoList.unshift(todo));
	}).then((model) => {
		return model.save();
	}).then((updatedModel) => {
		res.status(200).send(updatedModel['todoList'][0])
	}).catch((err) => {
		res.send(err);
	});
}

const updateToDo = (req,res) => {

	if(!req.params.todoId){
		return res.status(400).send("Invalid request");
	}

	const { error } = todoValidation(req.body);
	if(error) return res.status(400).send(error.details[0].message);

	Bucket.updateOne({_id:mongoose.Types.ObjectId(req.body.bucketId)},
		{$set:{"todoList.$[i].todoTitle":req.body.todoTitle, "todoList.$[i].todoStatus":req.body.todoStatus}},
		{ arrayFilters: [
			{$and: [
					//{i._id:mongoose.Types.ObjectId(req.params.todoId)}
					{'i._id': mongoose.Types.ObjectId(req.params.todoId)},
				],
			}]
		})
		.then((model)=>{
			if(model.nModified){
				let respose = {
					_id:req.params.todoId,
					todoTitle:req.body.todoTitle,
					todoStatus:req.body.todoStatus
				}
				res.status(200).send(respose);
			}
			else{
				res.status(400).send({err:"Update failed"})
			}

		}).catch((err) => {
			res.send(err);
		});
}

const deleteToDo = (req,res) => {


	if(!req.params.todoId && !req.body.bucketId){
		return res.status(400).send("Invalid request");
	}


	Bucket.findById(req.body.bucketId).then(buckt => {
		if(!buckt.todoList.length){
			return res.status(400).send({ok:0,err:"no todoFound"});
		}
		buckt.todoList = buckt.todoList.filter(todo => {
			return todo._id != req.params.todoId;
		});
		buckt.save()
			.then((response) => {
				res.status(200).send({deleted:1,_id:req.params.todoId});
				//mongoose.connection.close();
			})
			.catch(err => {
				res.status(500).send(err);
			});
	})
}

app.listen(port, () => {
	console.log(`Server runing on port ${port}`);
})

app.get('/api/todo/:bucketId',fetchToDo)
app.post('/api/todo',addToDo)
app.get('/api/bucket',fetchBuckets)
app.post('/api/bucket',addBucket)
app.put('/api/todo/:todoId',updateToDo)
app.post('/api/todo/:todoId',deleteToDo)


module.exports = app;