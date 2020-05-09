'user strict';
var sql = require('./mysqldatabase.js');
var Valid = require('./validation/validator.js');
//Task object constructor
var Task = function (task) {
    this.id = task.id;
    this.status = task.status;
    this.title = task.title;
    this.description = task.description;
    this.due_date = task.due_date;
    this.project_id = task.project_id;

};
Task.createTask = function (newTask, result) {
    console.log(newTask.due_date);
    try {
        Valid.validate_a_task(newTask, function (err, res) {
            if (err) {
                result(err, null);
            } 
        });
        sql.query("INSERT INTO tasks set ?", newTask, function (err, res) {
            if (err) {
                result(err.sqlMessage, null);
            }
            else {
                console.log(res.insertId);
                result(null, res.insertId);
            }
        });
    }

    catch (err) {
        result(err.name, null);
        console.log(err);
    }
};
Task.getTaskById = function (taskId, result) {
    sql.query("Select * from tasks where id = ? ", taskId, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            if (!res[0]) {
                console.log("VERi bulunamadı")
                console.log(res[0]);
                result("Veri Bulunamadı", null);
            } else {
                result(null, res);
            }
        }
    });
};
module.exports = Task;