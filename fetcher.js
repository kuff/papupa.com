const axios = require('axios');
const { timeSince } = require('./util.js');

const fetcher = {

    getGitHubActivity: async () => {
        return new Promise((resolve, reject) => {
            console.log("Requesting new data!");
            axios.get('https://api.github.com/users/kuff/events')
                .then(response => {

                    const data = response.data
                    if (!response || response.message) resolve({});

                    const result = {
                        repo: data[0].repo.url,
                        timestamp: timeSince(data[0].created_at)
                    }
                    resolve(result);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                });
        });
    },

    /*getTwitterActivity: async () => {
        return new Promise((resolve, reject) => {
            axios.get('url')
                .then(response => {

                    // ...
                });
        });
    },*/

}

module.exports = fetcher;