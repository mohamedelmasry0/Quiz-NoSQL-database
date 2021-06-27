
//Insert CRUD
db.Answers.insertOne({
    "Question": ObjectId("609969dd7162d029d20a9d44"),
    "Answer": "A NoSQL non relational database system" 
    
    })
// Aggregate 
    db.Answers.aggregate({
        $lookup: {
            from: "Questions",
            localField: "Question",
            foreignField: "_id",
            as: "questionData"
        }
    })