var express = require('express');
var app = express();
var hbs = require('hbs');

// 设置模板引擎
app.set('view engine', 'hbs');
// 注册模板路径
hbs.registerPartials(__dirname + '/views');

// 设置 view 路径
app.set('views', __dirname + '/views');

app.get('/', function (req, res) {
  res.render('index')
});

app.listen(3000);