const mongoose = require("mongoose");



const deleteMovie = async(req, res) => {
    const moviesModel = mongoose.model("movies");

const movie_id =req.params.movie_id;

const getMovie = await moviesModel.findOne({
    _id: movie_id,
})

if(!getMovie) throw "This movie does not exist!";


await moviesModel.deleteOne({
    _id: movie_id
})



    res.status(200).json({
    status: "success",
    message : "movie deleted successfully"
});


}
    module.exports = deleteMovie;

