'use strict';
module.exports = function(app) {

  
  var appCtrl= require('../controller/appController');


           
















  
  // todoList Routes
  app.route('/tasks')
    .post(appCtrl.create_a_task);
   
   app.route('/tasks/:taskId')
    .get(appCtrl.read_a_task);
    };