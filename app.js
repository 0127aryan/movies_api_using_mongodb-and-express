require("express-async-errors");

const express = require("express");
require("dotenv").config();

const addMovie = require("./controllers/addMovie");

const mongoose = require("mongoose");
const getAllMovies = require("./controllers/getAllMovies");
const getSingleMovie = require("./controllers/getSingleMovie");
const editMovie = require("./controllers/editMovies");
const deleteMovie = require("./controllers/deletemovie");
const movieRecommendation = require("./controllers/movierecommendation");
const errorHandler = require("./handlers/errorHandler");

//Connection to mongodb

mongoose
.connect(process.env.mongo_connection, {})
.then(()=>{
    console.log("connection to mongodb successfull");
})
.catch(() => {
    console.log("connection to mongodb failed!")
});

const app = express();



app.use(express.json());


require("./models/movies.model");

//Routes

app.post("/api/movies", addMovie);
app.get("/api/movies", getAllMovies);
app.get("/api/movies/:movie_id", getSingleMovie);
app.patch("/api/movies", editMovie);
app.delete("/api/movies/:movie_id", deleteMovie);

//open ai suggestions
app.get("/api/movies/openai/getRecommendations", movieRecommendation);

app.use(errorHandler);

app.listen(8000,()=> {
    console.log("Server started successfully");
});