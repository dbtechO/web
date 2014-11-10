var express = require('express'),
    exphbs  = require('express-handlebars');

var app = express();

app.set('port', (8080))
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/styles', express.static(__dirname + '/styles'));

app.get('/', function (req, res) {
    res.render('home' );
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})