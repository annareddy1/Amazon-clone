const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const { response, request } = require('express');
const stripe = require('stripe')('sk_test_51Kh0t8Hn0YZaIulqDY3i6SAOj5i9dUqJwUja9j8aDheuyaA2kHzGIfNgDDpoWwqI1QxVgoTtKTa7YA1bI4pHMzi600pdYkEaEc');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


// Setting up the API
// - App Config
const app = express();

// - Middlewares
app.use(cors({
    origin: true
}));

//allow us to send data in json and parse the same
app.use(express.json());

// - API routes

app.get('/', (request, response) => response.status(200).send('Welcome to serverless computing'));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
  
    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);
  
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // subunits of the currency
      currency: "usd",
    });
  
    // OK - Created
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  });

// - Listen command
exports.api = functions.https.onRequest(app);

