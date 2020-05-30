const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sendGrid = require('@sendgrid/mail');

const app = express();

const PORT = process.env.PORT || 3030;

require('dotenv').config();

app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get('/api', (req, res, next) => {
    res.send('API Status Running')
});

app.post('/api/email', (req, res, next) => {
    sendGrid.setApiKey(process.env.SENDGRID_API_KEY)

    // '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'

    const msg = {
      to: 'rohanbawa64@gmail.com',
      from: 'rbawa64@gatech.edu',
      subject: 'Portfolio Website Contact',
      text: 'From: ' + req.body.name + '\nEmail: ' + req.body.email + '\nMessage: ' + req.body.message
    }

    sendGrid.send(msg)
        .then(result => {
            res.status(200).json({
                success: true
            });
        })
        .catch(err => {
            console.log('error: ', err);
            res.status(401).json({
                success: false
            });
        });
});


app.listen(PORT, '0.0.0.0');
