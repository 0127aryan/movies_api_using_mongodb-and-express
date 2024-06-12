const mongoose = require("mongoose");

const addMovie =async (req, res) =>{
    const moviesModel = mongoose.model("movies");

const {movie_name, info, rating, description} = req.body;

//validations


    if(!movie_name) throw "Movie name is required";
    if(!info) throw "Info must be provided";
    if(!rating) throw "Rating must be provided";
    if(rating < 1 || rating >10) throw "Rating must be 1-10";

    





/* while using try and catch block.. it is easier and compatible as compared to use error code and if method.
if(!info){
   
}

if(!rating){
    res.status(400).json({
        status:"failed",
        message: "rating must be provided",

    });
   return;
}

if(rating < 1 || rating > 10){
    res.status(400).json({
        status:"failed",
        message: "rating must be provided between 1-10",

    });
   return;
}
*/





//success part of our code


const createdMovie = await moviesModel.create({
    movie_name: movie_name,
    info: info,
    rating: rating,
    description: description,
});

//console.log(createdMovie);



res.status(200).json({
    status: "success",
    message: "Movie added successfully",

});

};

module.exports = addMovie;