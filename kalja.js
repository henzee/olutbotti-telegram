const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const packageInfo = require('./package.json');
var token;
var brewtoken;

if (process.env.NODE && process.env.NODE.indexOf("heroku")) {
    console.log("I'm in Heroku!");
    token = process.env.TELEGRAM_TOKEN;
    brewtoken = process.env.BREWERYDB_TOKEN;
}
else {
    token = '357991658:AAFKTSI_v1xxOWKGVBIXynRrI-xSaFsyJrY';
    brewtoken = 'bd262cd1935c4c593bffe90e4305c20f';
}
const telegram = new TelegramBot(token, { polling: true });

telegram.onText(/\Kalja/, (message) => {
  console.log(message);
  telegram.sendMessage(message.chat.id, 'Maistuisko?');
});

const app = express();
app.get('/', (req, res) => res.json({ version: packageInfo.version }));
app.listen(process.env.PORT || 3000, () => console.log('Maistuisko?'));