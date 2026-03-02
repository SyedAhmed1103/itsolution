<?php
header("Content-Type: application/json");

require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;

$name    = htmlspecialchars(trim($_POST['fullname'] ?? ''));
$email   = htmlspecialchars(trim($_POST['email'] ?? ''));
$phone   = htmlspecialchars(trim($_POST['phone'] ?? ''));
$message = htmlspecialchars(trim($_POST['message'] ?? ''));

if (empty($name) || empty($email) || empty($phone) || empty($message)) {
    echo json_encode(["status"=>"error","message"=>"All fields required"]);
    exit;
}

$mail = new PHPMailer(true);

try {

    $mail->isSMTP();
    $mail->Host       = 'smtp.hostinger.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'inquiry@wirepointservices.com';
    $mail->Password   = 'Inquiry@4321';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;

    $mail->setFrom('inquiry@wirepointservices.com', 'Website Contact');
    $mail->addAddress('syedahmedimam377@gmail.com');

    $mail->isHTML(true);
    $mail->Subject = "New Contact Form Message from $name";

    $mail->Body = "
    <h2>New Contact Message</h2>
    <p><strong>Name:</strong> $name</p>
    <p><strong>Email:</strong> $email</p>
    <p><strong>Phone:</strong> $phone</p>
    <p><strong>Message:</strong><br>$message</p>
    ";

    $mail->send();

    echo json_encode([
        "status"=>"success",
        "message"=>"Message sent successfully ✅"
    ]);

} catch (Exception $e) {

    echo json_encode([
        "status"=>"error",
        "message"=>"Mail sending failed ❌"
    ]);
}