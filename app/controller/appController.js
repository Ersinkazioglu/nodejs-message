'use strict';
var Task = require('../model/appModel.js');
var path = require('path');
exports.create_a_task = function (req, res) {
  var new_task = new Task(req.body);

  //handles null error 
  if (!new_task.id) {

    res.status(400).send({ error: true, message: 'Please provide task/id' });

  }
  else {

    Task.createTask(new_task, function (err, task) {

      if (err) { res.status(400).send(err); }
      else {
        res.json(task);
      }
    });
  }
};


exports.read_a_task = function (req, res) {
  Task.getTaskById(req.params.taskId, function (err, task) {
    if (err) {
      res.status(400);
      res.send(err);
    } 
    else { 
      res.json(task); 
    }
  });
};




exports.login= function(req, res) {
  
  if(req.session.loggedin) 
  res.send("trueeeeeeeeeeee");
  else
  res.sendFile(path.join(__dirname , '../model','login.html'));
  


}

exports.auth=function(req, res) {
 // if (!req)res.send('Plssssssssssssssssssease enter Username and Password!');
  if(req.session.loggedin){
    res.redirect('/home')
  } 
	var username = req.body.username;
	var password = req.body.password;
	if (username && password) {
    Task.auth(req,username,password,function(err,task){
      if (err){
        res.status(400);
        req.session.loggedin = false;
        res.send("Wrong username or password");
        res.end();
      } 
      else {
        res.redirect('/home');
        res.end(); 
      }
    });
	
	} else {
		res.send('Please enter Username and Password!');
		res.end();
	}

}

exports.home=function(req, res) {

    if(req.session.loggedin){
    res.send(req.session.username);

    }
    else{

    res.send("error");
    res.end();
    }



}