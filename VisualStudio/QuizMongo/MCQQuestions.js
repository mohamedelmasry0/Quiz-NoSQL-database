//Insert CRUD
db.MCQQuestions.insertOne({
  
  "Question":"What is Mongo?",
  "Topic": ["Programming", "NoSQL","Database"],
  "Difficulty": "Medium",
  "Choices":[
  {"choice":1,"choiceLabel":"Sql","valid":false},
  {"Choice":2,"choiceLabel":"NoSQL","valid":true},
  {"Choice":3,"choiceLabel":"Animal","valid":false}
  ]
})


//Insert CRUD
db.MCQQuestions.insert({
  
  "Question":"What is Postgres?",
  "Topic": ["Programming", "NoSQL","Database"],
  "Difficulty": "Easy",
  "Choices":[
  {"choice":1,"choiceLabel":"Sql","valid":true},
  {"Choice":2,"choiceLabel":"NoSQL","valid":false},
  {"Choice":3,"choiceLabel":"Animal","valid":false}
  ]
})