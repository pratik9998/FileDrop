//in backend folder, first step is to type command : npm init -y in terminal
//and then create 4 folders : controllers, database,models,routes
//in backend folder, create index.js file


import express from 'express';
import DBConnection from './database/db.js';
import router from './routes/routes.js';
import cors from 'cors'; //to handle request from one port to another port
//here our frontend is running on port 5173 and backend is running on port 8000
//so we need this
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

DBConnection();

app.get('/', (req, res) => {
    console.log("hello world");
});

app.listen(8000, () => {
    console.log("server is running on port 8000");
});

