const axios = require('axios')

const api =url=> axios.get("https://api.github.com/users/"+url)
  .catch(function (error) {
    // handle error
    console.log(error);
  })


module.exports = api