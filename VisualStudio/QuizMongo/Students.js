//insert CRUD
db.Students.insertOne({
    "name":"ELMASRY Mohamed",
    "ID": "1"})



    function insertStudent(
        name,
        ID
        
        
    ) {
        db.Students.insert({ 
            name: "MARTIN Martin",
            ID:"2"
        
     });
    }
    
////Delete CRUD
    db.students.drop()

//Update CRUD
    db.Students.updateOne(
        { "name" : "ELMASRY Mohamed" },
        { $set: { 3 : 1 } }
     );
