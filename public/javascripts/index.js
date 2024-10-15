function sendMessage() {
  const userInput = document.getElementById("userInput");
  const chatMessages = document.getElementById("chatMessages");

  if (userInput.value.trim() !== "") {
    // Add user message
    const userMessage = document.createElement("div");
    userMessage.className = "message user-message";
    userMessage.textContent = userInput.value;
    chatMessages.appendChild(userMessage);

    // Clear input field
    userInput.value = "";

    // Simulate AI response (replace this with actual API call)
    setTimeout(() => {
      const aiMessage = document.createElement("div");
      aiMessage.className = "message ai-message";
      aiMessage.textContent =
        "This is a simulated AI response. Replace this with actual API integration.";
      chatMessages.appendChild(aiMessage);

      // Scroll to bottom of chat
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);

    // Scroll to bottom of chat
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}

// Allow sending message with Enter key
document.getElementById("userInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});
