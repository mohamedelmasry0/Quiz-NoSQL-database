//Insert CRUD
db.Questions.insertOne({
"Question":"What is Mongo?",
"Topic": ["Programming", "NoSQL","Database" ],
"Difficulty": "Medium"
})


function insertQuestion(
    Question,
    Topic,
    Difficulty
    
    
) {
    db.Questions.insert({ Question: "What's Postgres?",
    Topic: ["Programming", "SQL","Database" ],
    Difficulty: "Easy"
    
 });
}


//Delete CRUD
db.Questions.deleteOne({
    "difficulty": "Medium"
});

//Read, search CRUD
db.Questions.find()
//Read, search CRUD
db.Questions.find({difficulty:"Easy"})


