require('dotenv').config();

const TWILIO_SID = process.env.TWILIO_SID;
const TWILIO_SECRET = process.env.TWILIO_SECRET;

const client = require('twilio')(TWILIO_SID, TWILIO_SECRET);

module.exports = {
  sendSMS: (to, message) => {
    client.messages
      .create({
        body: message,
        from: process.env.TWILIO_NUMBER,
        to: to,
      })
      .then(message => console.log(message.sid));
  },
};
