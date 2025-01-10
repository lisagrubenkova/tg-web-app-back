const TelegramBot = require('node-telegram-bot-api');

const token = `7661128414:AAGZv8IZ5jpG1zOpuF4wMybtSoWYN-Wsqwk`
const webAppUrl = `https://ya.ru`
const bot = new TelegramBot(token, {polling: true});

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === '/start') {
    await bot.sendMessage(chatId, 'Ниже появится кнопка, заполни форму', {
        reply_markup: {
            keyboard: [
                [{text: 'Заполнить форму', web_app: {url: webAppUrl}}],
                [{text: 'Паприкалываться'}]
            ]
        }
    })
  }

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Заходи', {
    reply_markup: {
        inline_keyboard: [
            [{text: 'Сделать заказ', web_app: {url: webAppUrl}}]
        ]
    }
  });
});