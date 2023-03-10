const express = require('express');
const http = require('http');
const cors = require('cors');

const PORT = process.env.PORT || 5000

const router = require('./App/Routes/Routes');
const app = express();
const server = http.createServer(app);

require('./socketIo')(server);

app.use(cors());
app.use(router);

server.listen(PORT, () => console.log(`server has started on port ${PORT}`));