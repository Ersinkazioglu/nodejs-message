
let chai = require("chai");
let chaiHttp = require("chai-http");
let server=require("../app");
let should = chai.should();
chai.use(chaiHttp);
var sql = require('../app/model/mysqldatabase.js');

    var task = {
        "id": "12",
        "title": "this is my title",
        "description": "lorem ipsum upsim morel",
        "project_id": "1343",
        "due_date": "2012-04-23T18:25:43.511Z",
        "status": "new"
        
        }
describe ("POST / GET OPERATIONS", function(){

        
    it("POST operation", (done) => {
     
        chai.request(server)
            .post("/tasks/")
            .send(task)
            .end((err, res) => {
                res.should.have.status(200);
                console.log("Response Body:", res.body);
                     
                done(); 
            
            });
      
    });
   
    it ("GET operation", (done)=>{
        chai.request(server)
           .get("/tasks/"+task.id)
           .end((err, result)=>{      

            result.should.have.status(200);
            console.log('Should get task by id= '+ task.id, result.body);
            
           done();
           sql.query("DELETE FROM tasks WHERE id=?", task.id, function (err, res) {
            if (err) {
                result(err.sqlMessage, null);
            }
            else {
              console.log("new test avaliable");
            }
             });
                
            });
        

    });


}) ;



