const filesystem = require('fs')

var data = filesystem.readFileSync(__dirname+"/student.json",'utf8')
console.log(data)


var student = {
    "name":"deep"
}

student = JSON.stringify(student,null,1)
filesystem.writeFileSync(__dirname+"/student.json",student)
