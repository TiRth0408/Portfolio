<?php

require 'vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $subject = htmlspecialchars($_POST["subject"]);
    $message = htmlspecialchars($_POST["message"]);

    // Create PHPMailer object
    $mail = new PHPMailer(true);

    try {
        // SMTP configuration
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // your SMTP host
        $mail->SMTPAuth = true;
        $mail->Username = 'ttirth41@gmail.com'; // your email username
        $mail->Password = 'ldnp ufrc xxqc nskr'; // your email password
        $mail->SMTPSecure = 'tls'; // or 'ssl' if required
        $mail->Port = 587; // or 465 for ssl

        // Sender & recipient
        $mail->setFrom('ttirth41@gmail.com', 'Your Name');
        $mail->addAddress('ttirth41@gmail.com', 'Receiver Name');

        // Content
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = "<b>Name:</b> {$name}<br><b>Email:</b> {$email}<br><b>Message:</b> {$message}";

        $mail->send();

        // ✅ WhatsApp API Integration
        // Using WhatsApp Click-to-Chat URL to open on submission
        // OR using WhatsApp Business API if you have setup.

        $whatsappNumber = '917046417487'; // your WhatsApp number with country code
        $waMessage = "Name: {$name}%0AEmail: {$email}%0ASubject: {$subject}%0AMessage: {$message}";

        // Redirect to WhatsApp after email is sent
        header("Location: https://wa.me/{$whatsappNumber}?text={$waMessage}");
        exit();

    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
