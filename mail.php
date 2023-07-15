<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;


require 'vendor/autoload.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'utf-8';

$mail->setFrom('mchs@ass-sro.ru'); // от кого будет уходить письмо?
$mail->addAddress('licensing@ass-sro.ru');     // Кому будет уходить письмо

if($_FILES){
	$mail->addAttachment($_FILES['upload']['tmp_name'], $_FILES['upload']['name']);
}

$mail->isHTML(true);                                  // Set email format to HTML

//$message = '<table>';
$validator =substr($_POST['Телефон'], 0, +2); 
if($validator !='+7'){
	header('Content-Type: application/json');
	http_response_code(500);
	echo json_encode('идите нахуй :)');
	die();
};
$c = true;
foreach ($_POST as $key => $value) {
	if ($value != "" && $key != "form_subject") {
		$message .= "
			" . (($c = !$c) ? '<tr>' : '<tr style="background-color: #f8f8f8;">') . "
			<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
			<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
		</tr>
		";
	}
}

//$message .= '</table>';
	
$mail->Subject = trim($_POST["form_subject"]);
$mail->Body = "<table style='width: 100%;'>$message</table>";
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    header('location: done.html');
}
