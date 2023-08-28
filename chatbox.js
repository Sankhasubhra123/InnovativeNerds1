document.addEventListener("DOMContentLoaded", function() {
    const chatMessages = document.getElementById("chat-messages");
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");

    sendButton.addEventListener("click", function() {
        const messageText = messageInput.value.trim();
        if (messageText !== "") {
            const messageElement = document.createElement("div");
            messageElement.classList.add("message");
            messageElement.textContent = messageText;
            chatMessages.appendChild(messageElement);
            messageInput.value = "";
            // You can add code here to send the message to the backend.
        }
    });
});