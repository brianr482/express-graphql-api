const functions = require('firebase-functions');
const express = require('express');

// Populate datasources with mock data
require('./scripts/mock-data');

const app = express();

app.get('/', (req, res ) => res.send('Hello world!'));

exports.graphql = functions.https.onRequest(app);
