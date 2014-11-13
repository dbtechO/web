var express = require('express'),
    exphbs  = require('express-handlebars'), 
    jade = require('jade');

var app = express();

app.set('port', (process.env.PORT || 8080))
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'jade');

app.use('/styles', express.static(__dirname + '/styles'));

app.get('/', function (req, res) {
    res.render('home' );
});


app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
