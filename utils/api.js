// This is the connector to the github api
const axios = require("axios");

const connector = {
     getInfo(user) {
        return axios.get("https://api.github.com/users/" + user )
        .catch(function(err) {
            console.log(err);
          process.exit(1);
        });
    }
}

module.exports = connector;