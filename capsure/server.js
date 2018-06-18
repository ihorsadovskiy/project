const express = require('express');
const app = express();

// app.set('views', './build');
// app.set('view engine', 'html');
app.use('/build', express.static(__dirname + '/build'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
