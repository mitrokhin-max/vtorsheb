<?php 
require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$comment = $_POST['user_comment'];

$mail->isSMTP();
$mail->Host = 'mail.hosting.reg.ru';
$mail->SMTPAuth = true;
$mail->Username = 'robot@vtorsheb.ru'; // логин от почты с которой будут отправляться письма
$mail->Password = 'qwerty123'; // пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;

$mail->setFrom('robot@vtorsheb.ru'); // От кого будет уходить письмо
$mail->addAddress('mitrohmax@yandex.ru'); // Кому будет уходить письмо
$mail->isHTML(true);

$mail->Subject = 'Заявка с сайта';
$mail->Body    = '<strong>Имя:</strong> '.$name. '<br>Номер телефона: '.$phone. '<br>Комментарий: '.$comment;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: success.html');
}
?>