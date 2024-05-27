<?php
$fullName = $_POST['fullName'];
$phoneNumber = $_POST['phoneNumber'];
$mail = $_POST['mail'];
$userRequest = $_POST['userRequest'];

$message = "Получен новый запрос:\n\nФИО: $fullName\nТелефон: $phoneNumber\nE-mail: $mail\nЗапрос: $userRequest";

$telegramBotToken = '7096831566:AAFhFVxWJ7PebLNSv8vz_ssEIQ4dpEEThQA';
$telegramChatID = '-1002230001979';

$url = "https://api.telegram.org/bot$telegramBotToken/sendMessage?chat_id=$telegramChatID&text=" . urlencode($message);
file_get_contents($url);
http_response_code(200); // Успешный ответ

?>