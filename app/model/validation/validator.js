'user strict';

const Joi = require('joi');

var Data = function (data) {
    this.id = data.id;
    this.status = data.status;
    this.title = data.title;
    this.description = data.description;
    this.due_date = data.due_date;
    this.project_id = data.project_id;

};
const schema = Joi.object().keys({
    id: Joi.number().required(),
    status: Joi.string().required(),
    title: Joi.string().required(),
    description: Joi.string().required(),
    project_id: Joi.number().integer().required(),
    due_date: Joi.date().iso(),
});


Data.validate_a_task = function(data, res) {
    Joi.validate(data, schema, (err, value) => {
    const id = Math.ceil(Math.random() * 9999999);

    if (err) {
      throw err;
    } else {
    console.log(" Validation okey"); 

    }

});
}

module.exports = Data;

