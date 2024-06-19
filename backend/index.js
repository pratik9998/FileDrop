//in backend folder, first step is to type command : npm init -y in terminal
//and then create 4 folders : controllers, database,models,routes
//in backend folder, create index.js file


import express from 'express';
import DBConnection from './database/db.js';
import router from './routes/routes.js';
const app = express(); 

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

DBConnection();

app.get('/', (req,res) =>{
   console.log("hello world");
});

app.listen(8000, () => {
    console.log("server is running on port 8000");
});

