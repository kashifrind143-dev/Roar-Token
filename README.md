# Crypto Mining Telegram Mini App

## Setup
1. Rename `.env.example` to `.env` and add your Telegram bot token.
2. Deploy to Vercel:
   ```
   vercel login
   vercel
   ```
3. Set Telegram Webhook:
   ```
   https://api.telegram.org/bot<YOUR_BOT_TOKEN>/setWebhook?url=<YOUR_VERCEL_URL>/webhook
   ```

## Commands
- /mine → Mine tokens
- /balance → Check balance