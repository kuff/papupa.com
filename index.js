const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const { getGitHubActivity } = require('./fetcher.js');

const app = express();
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let cached_results = {};
let last_request = 0;

app.use('/', express.static(__dirname + '/site', {
    index: "index.html"
}));

app.get('/', (req, res) => res.send('site/index.html'));

app.get('/siteapi/getfeed', async (req, res) => {

    if (last_request == 0 || Date.now() - last_request > 5000 * 60) {
        cached_results = await getGitHubActivity();;
        last_request = Date.now();
    }

    res.send({
        success: cached_results != {},
        data: cached_results
    })

});

app.listen(80, () => console.log('Listening on port 80!'));