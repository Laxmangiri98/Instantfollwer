<?php
// Check if the request is a POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve the payment details sent by PayPal
    $data = json_decode(file_get_contents("php://input"), true);
    
    // Process the payment details
    // Here you can update your database, send confirmation emails, etc.
    // For demonstration purposes, let's just log the payment details
    file_put_contents('payment.log', print_r($data, true), FILE_APPEND | LOCK_EX);
    
    // Send a response back to PayPal to confirm the payment
    http_response_code(200);
    echo json_encode(array('status' => 'success'));
} else {
    // If the request method is not POST, return an error response
    http_response_code(405);
    echo json_encode(array('status' => 'error', 'message' => 'Method Not Allowed'));
}
?>
