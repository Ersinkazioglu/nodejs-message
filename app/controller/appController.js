'use strict';
var Task = require('../model/appModel.js');

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

