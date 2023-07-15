<?php
// Файлы phpmailer
require('PHPMailer.php');
require('SMTP.php');
require('Exception.php');
// Переменные
$name = $_POST['name'];
$number = $_POST['number'];
$type = $_POST['type'];
// Настройки
$mail =  $mail = new PHPMailer\PHPMailer\PHPMailer();
$mail->isSMTP(); 
$mail->Host = 'ssl://smtp.mail.ru';
$mail->SMTPAuth = true; 
$mail->Username = 'mchs@ass-sro.ru'; 
$mail->Password = 'tyri4enkolove';
$mail->SMTPSecure = 'ssl'; 
$mail->Port = 465;
$mail->setFrom('mchs@ass-sro.ru'); // Ваш Email
$mail->addAddress('licensing@ass-sro.ru'); // Email получателя
$mail->addAddress('godlikedesigner@gmail.com'); // Еще один email, если нужно. 
// Письмо
$mail->isHTML(true); 
$mail->Subject = '=?UTF-8?B?'.base64_encode('Письмо с сайта МЧС').'?='; // Заголовок письма

switch($type) {
    case "podgotovka":
        $mail->Body = "
        Имя: $name;
        <br />
        Тип Услуги: Подготовим к проверке;
        <br />
        Телефон: $number;
        ";
        break;
    case "podgotovka+":
        $mail->Body = "
        Имя: $name;
        <br />
        Тип Услуги: Подготовка к проверке МЧС+;
        <br />
        Телефон: $number;
        ";
        break;   
    case "kluch":
        $mail->Body = "
        Имя: $name;
        <br />
        Тип Услуги: Лицензия МЧС под ключ;
        <br />
        Телефон: $number;
        ";
        break;
    case "konsultaciya":
        $mail->Body = "
        Имя: $name;
        <br />
        Тип Услуги: Хочет получить Консультацию;
        <br />
        Телефон: $number;
        ";
        break;
    case "skidka":
        $mail->Body = "
        Имя: $name;
        <br />
        Тип Услуги: Хочет получить инофрмацию о скидке;
        <br />
        Телефон: $number;
        ";
        break;  
    case "skidka":
        $mail->Body = "
        Имя: $name;
        <br />
        Тип Услуги: Хочет получить инофрмацию о скидке;
        <br />
        Телефон: $number;
        ";
        break;                                  
}

if($type === 'podgotovka') {
    $mail->Body = "
    Имя: $name;
    <br />
    Тип Услуги: Подготовим к проверке;
    <br />
    Телефон: $number;
    ";
}

$mail->CharSet = 'UTF-8';

// Результат
if(!$mail->send()) {
 echo 'Message could not be sent.';
 echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
 echo 'ok';
}
?>