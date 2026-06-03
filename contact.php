<?php
/**
 * Vertex - Secure Contact Form Backend Handler
 * Captures, sanitizes, validates, and sends contact submissions to the firm's email.
 * Includes both standard PHP mail() and SMTP-ready PHPMailer configurations.
 */

// Set JSON and security headers
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');

// Prevent unauthorized direct access
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'status' => 'error', 
        'message' => 'Method Not Allowed',
        'message_ur' => 'غیر مجاز طریقہ کار (Method Not Allowed)'
    ]);
    exit;
}

// Get and trim POST data
$name = isset($_POST['Name']) ? trim($_POST['Name']) : '';
$email = isset($_POST['Email']) ? trim($_POST['Email']) : '';
$subject = isset($_POST['Subject']) ? trim($_POST['Subject']) : '';
$message = isset($_POST['Message']) ? trim($_POST['Message']) : '';

// Validation: Ensure all fields are filled
if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    echo json_encode([
        'status' => 'error', 
        'message' => 'All fields are required.',
        'message_ur' => 'تمام خانے پر کرنا لازمی ہیں۔'
    ]);
    exit;
}

// Validation: Ensure valid email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode([
        'status' => 'error', 
        'message' => 'Please enter a valid email address.',
        'message_ur' => 'براہ کرم ایک درست ای میل ایڈریس درج کریں۔'
    ]);
    exit;
}

// Sanitize inputs thoroughly to prevent XSS and HTML/SQL injections
$name = filter_var($name, FILTER_SANITIZE_SPECIAL_CHARS);
$email = filter_var($email, FILTER_SANITIZE_EMAIL);
$subject = filter_var($subject, FILTER_SANITIZE_SPECIAL_CHARS);
$message = filter_var($message, FILTER_SANITIZE_SPECIAL_CHARS);

// Recipient Email Address
$to = 'nomanrajput292@gmail.com';

// Email Subject
$email_subject = "Vertex Contact Form Submission: " . $subject;

// Email Message in beautifully styled HTML (Modern & Professional layout)
$email_body = "
<html>
<head>
  <title>New Contact Form Submission from Vertex</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #2D3748; background-color: #F4F6F8; padding: 20px; }
    .email-container { max-width: 600px; margin: 0 auto; background: #ffffff; padding: 30px; border-radius: 8px; border: 1px solid #DCE1E5; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05); }
    .header { border-bottom: 3px solid #C5A059; padding-bottom: 15px; margin-bottom: 20px; }
    .header h2 { color: #1A531A; margin: 0; font-size: 24px; }
    .field-row { margin-bottom: 15px; }
    .field-label { font-weight: bold; color: #4A5568; text-transform: uppercase; font-size: 11px; letter-spacing: 1px; }
    .field-value { font-size: 16px; margin-top: 5px; color: #2D3748; }
    .message-box { margin-top: 25px; padding: 20px; background-color: #E8ECEF; border-left: 4px solid #C5A059; border-radius: 4px; }
    .footer { margin-top: 30px; border-top: 1px solid #DCE1E5; padding-top: 15px; font-size: 12px; color: #718096; text-align: center; }
  </style>
</head>
<body>
  <div class='email-container'>
    <div class='header'>
      <h2>Vertex Contact Submission</h2>
    </div>
    <div class='field-row'>
      <div class='field-label'>Full Name</div>
      <div class='field-value'>{$name}</div>
    </div>
    <div class='field-row'>
      <div class='field-label'>Email Address</div>
      <div class='field-value'><a href='mailto:{$email}' style='color: #1A531A; text-decoration: none;'>{$email}</a></div>
    </div>
    <div class='field-row'>
      <div class='field-label'>Subject</div>
      <div class='field-value'>{$subject}</div>
    </div>
    <div class='message-box'>
      <div class='field-label' style='margin-bottom: 8px;'>Message</div>
      <div style='white-space: pre-wrap; font-size: 15px;'>{$message}</div>
    </div>
    <div class='footer'>
      <p>This message was sent securely from the contact form on Vertex Law Firm & Corporate Consultant.</p>
    </div>
  </div>
</body>
</html>
";

/*
// ============================================================================
// OPTION A: SMTP CONFIGURATION (PHPMailer)
// ============================================================================
// Uncomment this block and configure your credentials if standard mail() is blocked.
//
// Step 1: Install PHPMailer (composer require phpmailer/phpmailer) or download it.
// Step 2: Uncomment the lines below and fill in your details.
// Step 3: Comment out OPTION B (standard PHP mail) at the bottom.

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

// Adjust these paths to where you have placed the PHPMailer library files
require 'vendor/autoload.php'; // If using Composer
// Or manual require:
// require 'path/to/PHPMailer/src/Exception.php';
// require 'path/to/PHPMailer/src/PHPMailer.php';
// require 'path/to/PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->SMTPDebug = SMTP::DEBUG_OFF;                         // Enable/disable debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                       // SMTP server (e.g., smtp.gmail.com)
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'your-email@gmail.com';                 // SMTP username
    $mail->Password   = 'your-app-password';                    // SMTP app-specific password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // TLS Encryption
    $mail->Port       = 587;                                    // SMTP Port for TLS

    // Recipients
    $mail->setFrom('no-reply@vertexoffice.com', 'Vertex Office');
    $mail->addAddress($to);                                     // Hardcoded: nomanrajput292@gmail.com
    $mail->addReplyTo($email, $name);

    // Content
    $mail->isHTML(true);
    $mail->Subject = $email_subject;
    $mail->Body    = $email_body;
    $mail->AltBody = "Full Name: $name\nEmail: $email\nSubject: $subject\n\nMessage:\n$message";

    $mail->send();
    echo json_encode([
        'status' => 'success', 
        'message' => 'Your message has been sent successfully (via SMTP)!',
        'message_ur' => 'آپ کا پیغام کامیابی سے بھیج دیا گیا ہے!'
    ]);
    exit;
} catch (Exception $e) {
    error_log("PHPMailer SMTP Error: " . $mail->ErrorInfo);
    echo json_encode([
        'status' => 'error', 
        'message' => 'Unable to send email (SMTP error). Please contact us directly.',
        'message_ur' => 'ای میل بھیجنے میں ناکامی (SMTP)۔ براہ کرم براہ راست رابطہ کریں۔'
    ]);
    exit;
}
*/

// ============================================================================
// OPTION B: STANDARD PHP MAIL() FUNCTION
// ============================================================================
// Default method: Uses the host server's local sendmail configuration.

// Construct headers to prevent email spoofing/spam filters
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: Vertex Office Website <no-reply@vertexoffice.com>" . "\r\n";
$headers .= "Reply-To: {$name} <{$email}>" . "\r\n";

if (mail($to, $email_subject, $email_body, $headers)) {
    echo json_encode([
        'status' => 'success', 
        'message' => 'Your message has been sent successfully!',
        'message_ur' => 'آپ کا پیغام کامیابی سے بھیج دیا گیا ہے!'
    ]);
} else {
    // Log failure for troubleshooting on the server side
    error_log("Failed to send contact email to $to");
    echo json_encode([
        'status' => 'error', 
        'message' => 'Could not send email. Please try again or contact us directly.',
        'message_ur' => 'ای میل بھیجنے میں ناکامی۔ براہ کرم دوبارہ کوشش کریں یا براہ راست رابطہ کریں۔'
    ]);
}
?>
