var express = require('express'); // Use the express library. 
var app = express(); // Create our app. 
var server = require('http').createServer(app);
var port = process.env.PORT || 3000;
var router = express.Router();
var io = require('socket.io')(server);

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

router.get('/', function(req, res){
  res.render('index')
})

Instagram = require('instagram-node-lib');

Instagram.set('client_id', process.env.INSTAGRAM_CLIENT_ID);
Instagram.set('client_secret', process.env.INSTAGRAM_CLIENT_SECRET);
Instagram.set('callback_url', 'http://1bc5888c.ngrok.io/');

// 
// var stream = Instagram.stream('statuses/filter', { track: 'nba' });

Instagram.tags.info({
  name: 'blue',
  complete: function(data){
    console.log(data);
  }
});

io.on('connection', function(socket){
  console.log('a user connected');
});

// // This is coming from socket.io. 'connect' is a /reserved/ word
// io.on('connect', function(socket) {
//   // this is coming from the twit module. 
//   // 'tweet' is one of the events it listens to
//   stream.on('picture', function(status) {
//     // this is our own channel we set up to to send the tweets down to the client
//     // this can be called anything but must be the same on the client!!!
//     var data = {};
//     // data.name = status.user.name;
//     // data.screen_name = status.user.screen_name;
//     // data.text = status.text;
//     // data.user_profile_image = status.user.profile_image_url;

//     socket.emit('statuses', data);
//   });
// });


