/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// import * as functions from 'firebase-functions'

const functions = require('firebase-functions');
// const functions = require('firebase-functions/v2')
// const onRequest = require('firebase-functions/v2/https')

exports.helloWorld = functions.https.onRequest((req, res)=>{
  const name = req.params[0].replace("/", "")
  const items = { lamp: "This is a lamp", chiar: "Good Chair", car: "You have nice car", audi:"My Nice car", cat:"Ruby my lovely cat..."}
  const message = items[name]
  res.send(`<h1>${message}</h1>`)
})

// const functions = require('firebase-functions');

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   response.send("Hello from Firebase!");
// });