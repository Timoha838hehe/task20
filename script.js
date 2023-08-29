const chatMessages = document.getElementById("chatMessages");
const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");

sendButton.addEventListener("click", sendMessage);

messageInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  });

function sendMessage() {
  const messageText = messageInput.value;
  if (messageText.trim() !== "") {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.textContent = messageText;
    chatMessages.appendChild(messageElement);
    messageInput.value = "";
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}

const clearButton = document.getElementById("clearButton");

clearButton.addEventListener("click", clearChat);

function clearChat() {
  chatMessages.innerHTML = "";
}

const emojiButtons = document.querySelectorAll(".emoji-button");

emojiButtons.forEach(button => {
  button.addEventListener("click", () => {
    const selectedEmoji = button.getAttribute("data-emoji");
    messageInput.value += selectedEmoji;
  });
});
  
