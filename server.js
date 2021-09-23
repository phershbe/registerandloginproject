const express = require('express');
const mongoose = require('mongoose');
const application = express();
application.use(express.json());
require('dotenv').config();

mongoose.connect(process.env.MONGODB_PASSWORD)
    .then(console.log('Connected to database'));

const db = mongoose.connection;

application.get('/', (request, response) => {
    response.send('Basic route here');
});

application.post('/register', (request, response) => {
    const username = request.body.username;
    const password = request.body.password;
    db.collection('data').insertOne({
        username,
        password,
    });
});

application.post('/login', async (request, response) => {
    const username = request.body.username;
    const password = request.body.password;
    const data = await db.collection('data').findOne({
        username,
        password,
    });
    if (data) {
        response.send({ message: 'Welcome ' + username});
    } else {
        response.send({ message: 'Login unsuccessful'});
    }
});

application.listen(8080, () => {
    console.log('Listening on PORT 8080');
});
