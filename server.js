const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const mailjet = require("node-mailjet").connect(process.env.MAILJET_PUBLIC_KEY, process.env.MAILJET_PRIVATE_KEY);

const app = express();


const PORT = process.env.PORT || 3030;

app.use(cors());

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get('/api', (req, res, next) => {
    res.send('API Status Running' + PORT)
});

app.post('/api/email', (req, res, next) => {
    mailjet.post("send", { version: "v3.1" }).request({
        Messages: [
            {
                From: { Email: 'rbawa64@gatech.edu', Name: 'Portfolio Website Contact' },
                To: [{ Email: 'rohanbawa64@gmail.com', Name: 'Rohan' }],
                Subject: 'Portfolio Website Contact',
                TextPart: 'From: ' + req.body.name + '\nEmail: ' + req.body.email + '\nMessage: ' + req.body.message,
                HTMLPart: "<h2>Name: [[var:name]]<br></h2><h3>Email: [[var:email]]<br>Message: [[var:message]]</h3>",
                Variables: { name: req.body.name,
                             email: req.body.email,
                             message: req.body.message
                            }
            }
        ]
    });
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // relative path
    });
}

app.listen(PORT, '0.0.0.0');
