const express = require('express');
const bodyParser = require('body-parser');
let app = express();

app.use(express.static('public'));

app.post(
    "/auth",
    // première fonction à être appellée
    bodyParser.urlencoded({ extended: true }),
    function(request, response) {
        console.log(request.body);
        response.send("Success!")
    }
);

app.listen(8080, function(err) {
    if (err) {
        console.error(err);
        return;
    }
    console.log('listening on 8080...')
});