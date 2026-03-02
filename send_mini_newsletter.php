<?php

header("Content-Type: application/json");
error_reporting(E_ALL);
ini_set('display_errors', 1);

require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["status"=>"error","message"=>"Invalid request method"]);
    exit;
}

$email = trim($_POST['email'] ?? '');

if (empty($email)) {
    echo json_encode(["status"=>"error","message"=>"Email is required"]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["status"=>"error","message"=>"Invalid email format"]);
    exit;
}

$mail = new PHPMailer(true);

try {

    // SMTP CONFIG
    $mail->isSMTP();
    $mail->Host       = 'smtp.hostinger.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'inquiry@saifandbrothers.com';
    $mail->Password   = 'Inquiry@@1234';
    $mail->SMTPSecure = 'ssl';   // safer
    $mail->Port       = 465;

    $mail->setFrom('inquiry@saifandbrothers.com', 'Mini Newsletter');
    $mail->addAddress('syedahmedimam377@gmail.com');

    $mail->isHTML(true);
    $mail->Subject = "New Mini Newsletter Subscription";
    $mail->Body    = "<h3>New Subscriber</h3><p>Email: $email</p>";

    if($mail->send()) {
        echo json_encode([
            "status"=>"success",
            "message"=>"Subscribed successfully ✅"
        ]);
    } else {
        echo json_encode([
            "status"=>"error",
            "message"=>"Mail sending failed"
        ]);
    }

} catch (Exception $e) {

    echo json_encode([
        "status"=>"error",
        "message"=>"Mailer Error: " . $mail->ErrorInfo
    ]);
}