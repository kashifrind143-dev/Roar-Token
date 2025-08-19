const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const BOT_TOKEN = process.env.BOT_TOKEN;
const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}`;

// Users balances
let userBalances = {};

// Mining function
function mineCrypto(userId) {
    if (!userBalances[userId]) userBalances[userId] = 0;
    const mined = Math.floor(Math.random() * 5) + 1;
    userBalances[userId] += mined;
    return mined;
}

// Webhook
app.post('/webhook', async (req, res) => {
    const message = req.body.message;
    if (!message) return res.sendStatus(200);

    const chatId = message.chat.id;
    const text = message.text.toLowerCase();

    let reply = "";

    if (text === "/mine") {
        const mined = mineCrypto(chatId);
        reply = `You mined ${mined} tokens! Total: ${userBalances[chatId]} tokens.`;
    } else if (text === "/balance") {
        const balance = userBalances[chatId] || 0;
        reply = `Your total balance: ${balance} tokens.`;
    } else {
        reply = `Welcome to Crypto Mining Bot!\nCommands:\n/mine - Mine tokens\n/balance - Check balance`;
    }

    await fetch(`${TELEGRAM_API}/sendMessage`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ chat_id: chatId, text: reply })
    });

    res.sendStatus(200);
});

app.get('/', (req, res) => res.send('roar is running!'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
