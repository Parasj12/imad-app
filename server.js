var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var content={
    title:'Article one',
    heading:'article one',
    date:'august 15',
    content:
    <div>
    <a href="/">home</a>
    </div>
    <div>
            hello
            f
            dsf
            dgverfergregrefef
            v
            ev
            ce
            v
            evregvrgbgtnhhngbfv
            fr
        </div>
    
     '
};
function createtemplate(data){
   var title=data.title;
   var content=data.content;
   var htmltemplate=

<html>
    <head>
    <title>
      $(title)
      </title>
    </head>
    <body>
        $(content)
        <br>
        <div class="center text-big bold">
            Hi! I am your webapp.
        </div>
        <script type="text/javascript" src="/ui/main.js">
        </script>
    </body>
</html>;
return htmltemplate;

}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/article-0ne', function (req, res) {
  res.send(createtemplate(article-one))
});

app.get('/article2', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article2.html'));
});

app.get('/article3', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article2.html'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
