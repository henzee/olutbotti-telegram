const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const packageInfo = require('./package.json');

const token = '357991658:AAFKTSI_v1xxOWKGVBIXynRrI-xSaFsyJrY';
const telegram = new TelegramBot(token, { polling: true });

telegram.on('Kalja', (message) => {
  console.log(message);
  telegram.sendMessage(message.chat.id, 'Maistuisko?');
});

const app = express();
app.get('/', (req, res) => res.json({ version: packageInfo.version }));
app.listen(process.env.PORT || 3000, () => console.log('Maistuisko?'));