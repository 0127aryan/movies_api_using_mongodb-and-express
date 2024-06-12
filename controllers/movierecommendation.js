const OpenAI = require('openai');
const mongoose = require("mongoose");



const movieRecommendation = async (req, res) => {

    const moviesModel = mongoose.model("movies");
    

    const allMovies = await moviesModel.find({});

    const moviesString = allMovies.map((el)=> el.movies_name).join(",")

    

    const prompt = 'I need a movie recommendations based on these movies : ${moviesString} Provide me with 10 suggestions!';
    console.log(prompt);
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY, // Ensure your API key is correctly set in your environment variables
      });

      async function main() {
        try {
          const chatCompletion = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: 'give me 3 cat names' }],
          });
          /*const responseMessage = chatCompletion.data;
          console.log(responseMessage);
          res.status(200).json({
            status: "Hello from OpenAI",
            data: responseMessage,
          });*/
        } catch (error) {
            console.error('Error creating chat completion:', error);
            res.status(500).json({
              status: "Error",
              message: error.message,
            });
          }
        }
      
      main();



};


module.exports = movieRecommendation;