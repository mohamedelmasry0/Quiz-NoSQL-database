//Insert CRUD

db.Test.insertOne({
  
    "Topic":"NoSQL",
    "Difficulty": "Medium",
    "questions":[
    ObjectId("609969dd7162d029d20a9d44"), ObjectId("609971eb7162d029d20a9d45")
    ]
  })
//aggregate
  db.Test.aggregate({
    $lookup: {
        from: "Questions",
        localField: "Question",
        foreignField: "_id",
        as: "questionData"
    }
})


//Insert CRUD

db.Test.insert({
  
    "Topic":"SQL",
    "Difficulty": "Easy",
    "questions":[
    ObjectId("609998f9e72e605c4093e72d"), ObjectId("60997d857162d029d20a9d48")
    ]
  })

 // mongod --replSet Test --dbpath ./mongoA --port 27001
 // mongod --replSet Test --dbpath ./mongoA --port 27001