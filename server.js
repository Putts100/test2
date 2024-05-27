const express = require('express');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const botToken = '7162248347:AAHAZiAsQH_94fMW0lE0Xi2t_zuMvM03c_M';
const chatId = '7162248347';

app.post('/submit-form', (req, res) => {
    const { name, phone, email } = req.body;

    const message = `Новая заявка!\nИмя: ${name}\nТелефон: ${phone}\nEmail: ${email}`;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            res.send('Данные успешно отправлены в Telegram!');
        })
        .catch(error => {
            console.error(error);
            res.status(500).send('Произошла ошибка при отправке данных в Telegram.');
        });
});

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});