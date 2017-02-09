const PORT = process.env.PORT || 3000;
const server = require('./server');

server.listen(PORT, () => {
  console.log('Server is fucking working and listening on PORT ', PORT);
});