#TODO APP (React,Redux,Webpack)

A small todo app built using React , Redux , Webpack , Node Js , Express Js and Mongo DB .This project is splited into two parts first : todo-frontend(React,redux,webpack) and second : todo-backend(Node,express,MongoDB).

### Quick start 

```bash
# clone  repo
$ git clone https://github.com/

# change directory to your app
$ cd fractal-assignment/todo-frontend

# install the dependencies with npm
$ npm install

# change directory to your app
$ cd fractal-assignment/todo-backend

# install the dependencies with npm
$ npm install

# start the frontend server navigate to fractal-assignment/todo-frontend
$ npm start

# start the backend server navigate to fractal-assignment/todo-backend (Make sure MongoDB is running on your machine at localhost:27017)
$ npm start
```
# Table of Contents

* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Installing](#installing)
    * [Developing](#developing)
    * [Documentation](#documentation)
## Dependencies

What you need to run this app:
* `node` , `npm` and `mongoDB` (Use [NVM](https://github.com/creationix/nvm))
* Ensure you're running Node and NPM 

## Installing


* `clone` the repo and navigate to todo-frontend  
* `npm install` to install all dependencies
* Navigate to todo-backend  and perform
* `npm install` to install all dependencies

## Developing

After you have installed all dependencies you can now start developing with:
Front-End 
* `npm start`

It will start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The application can be checked at `http://localhost:9000`.
* `npm start`

Navigate to Back-end and run `npm start` wil start `http://localhost:3000`.

## Documentation

After starting `http://localhost:9000` ,it will show a bucket form add bucket name in the form and submit
it will add bucket and will show the bucket below in the list.
* `Note: Bucket with same name could not be created`
* `Note: Bucket with min two chacters required`

After selecting bucket it will navigate to Todo form page where you can add/edit/update and mark as done a todo item to Bucket . These todo items could be seen in list below

* `Note: Todo item with min two chacters are required`



