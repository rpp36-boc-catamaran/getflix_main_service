require('dotenv').config()
const API_KEY = process.env;
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3002;
const path = require('path');
app.use(express.json())
app.use(express.urlencoded({extended: false}));
const axios = require('axios');

const baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/';

app.get('/main', async (req, res) => {
  let movies = [];
  for (var i = 1; i < 6; i++) {
    let options = {
      url: 'https://api.themoviedb.org/3/movie/popular',
      params: {
        api_key: API_KEY.KEY,
        language: 'en-US',
        page: i,
        video: true
      },
      method: 'get',
    }

    await axios(options)
      .then((data) => {
        movies = movies.concat(data.data.results)
      })
      .catch ((error) => {
        console.error(error)
      })
  }
  console.log(movies)
  res.send({data: movies})
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})