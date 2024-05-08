<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $subject = strip_tags(trim($_POST["subject"]));
    $message = trim($_POST["message"]);

    $recipient = "joudnassar.19.9@gmail.com"; 
    $headers = "From: $name <$email>";

    // Send email
    if (mail($recipient, $subject, $message, $headers)) {
        echo "success";
    } else {
        echo "error"; 
    }
} else {
    echo "error"; 
}
?>
