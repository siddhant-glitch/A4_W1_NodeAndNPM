const express = require('express'); //like a php require

const server = express();
const path = require('path');

server.set("views", path.join(__dirname, 'views'));

//set the static assets director so express knows where to look
//for css files, js files, images, etc
server.use(express.static(path.join(__dirname, 'public')));

server.get("/", (req,res) => {
  console.log('hit the home route');
  res.sendFile(path.join(__dirname, 'views/index.html'));
})

server.get("/contact", (req, res) => {
  console.log('hit the contact route');
  res.sendFile(path.join(__dirname, 'views/contact.html'));
})
const port = process.env.PORT || 3000;  //localhost:3000



server.listen(port, () => {
  console.log(`Server running at ${port}/`);
});