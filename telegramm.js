import fetch from 'node-fetch';

   const YOUR_TELEGRAM_BOT_TOKEN = '<7162248347:AAHAZiAsQH_94fMW0lE0Xi2t_zuMvM03c_M>';
   const YOUR_CHAT_ID = '<7162248347>';
   
   const sendMessageToTelegram = async (name, phone, email) => {
       try {
           const response = await fetch(`https://api.telegram.org/bot${YOUR_TELEGRAM_BOT_TOKEN}/sendMessage`, {
               method: 'POST',
               headers: {
                   'Content-Type': 'application/json'
               },
               body: JSON.stringify({ chat_id: YOUR_CHAT_ID, text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}` })
           });
   
           if (response.ok) {
               console.log('Данные успешно отправлены в Телеграмм!');
           } else {
               console.error('Произошла ошибка. Попробуйте еще раз.');
           }
       } catch (error) {
           console.error('Ошибка:', error);
       }
   };
   
   const http = require('http');
   const server = http.createServer(async (req, res) => {
       if (req.method === 'POST') {
           let data = '';
           req.on('data', chunk => {
               data += chunk.toString();
           });
   
           req.on('end', async () => {
               const { name, phone, email } = JSON.parse(data);
               await sendMessageToTelegram(name, phone, email);
               res.end('Данные успешно отправлены в Телеграмм!');
           });
       }
   });
   
   const PORT = 3000;
   server.listen(PORT, () => {
       console.log(`Сервер запущен на порту ${PORT}`);
   });