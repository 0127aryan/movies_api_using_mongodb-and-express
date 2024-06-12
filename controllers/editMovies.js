const mongoose = require("mongoose");

const editMovie = async(req, res) => {

    const moviesModel = mongoose.model("movies");
    const {movie_id, movie_name, rating, info, description} = req.body;

    
if(!movie_id) throw "Movie id is required";
    


await moviesModel.updateOne({
    _id: movie_id,
}, {
    movie_name: movie_name,
    rating: rating,
    info: info,
    description: description,
}, {
    runValidators: true,
}
);


res.status(200).json({

    status: "success",
    message: "movie is updated successfully",
});
};


module.exports = editMovie;