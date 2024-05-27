<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];

// Отправка сообщения в Telegram
$telegram_token = '7096831566:AAFhFVxWJ7PebLNSv8vz_ssEIQ4dpEEThQA';
$chat_id = '-1002230001979';
$message = "Получен новый запрос: \n\nИмя: $name\nТелефон: $phone\nEmail: $email";

$url = "https://api.telegram.org/bot$telegram_token/sendMessage?chat_id=$chat_id&text=".urlencode($message);
file_get_contents($url);

http_response_code(200); // Успешный ответ
?>