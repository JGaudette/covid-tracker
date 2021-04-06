# Covid Tracker

Send yourself text messages when new Massachusetts covid shot appointments open up

## Instructions

1. copy `.env.example` to `.env` and fill out with your information.  A twilio accounts API credentials are required
2. `npm install`
3. `node index.js`

The script will run every 10 minutes scanning for new appointment openings, and will text you for each one.

## Warning

New openings appear to come in batches.  Either modify the script to your needs, or once you get alerted turn off the script after you get an appointment