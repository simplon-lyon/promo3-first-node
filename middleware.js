const express = require('express');
const bodyParser = require('body-parser');
const auth = require('http-auth');

let app = express();
app.use(express.static('public'));

let basic = auth.basic({
    realm: "Toto",
    file: __dirname + "/.htpasswd"
});
app.use("/private", auth.connect(basic));

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