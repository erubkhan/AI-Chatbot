// Function to create and append a user message
function appendUserMessage(message) {
  const chatBody = document.getElementById("chat-body");
  const userMessage = document.createElement("div");
  userMessage.className = "chat-message user-message";
  userMessage.innerHTML = `<p>${message}</p>`;
  chatBody.appendChild(userMessage);
  chatBody.scrollTop = chatBody.scrollHeight;

  // Process user input
  processUserInput(message);
}

// Function to create and append a bot message
function appendBotMessage(message) {
  const chatBody = document.getElementById("chat-body");
  const botMessage = document.createElement("div");
  botMessage.className = "chat-message bot-message";
  botMessage.innerHTML = `<p>${message}</p>`;
  chatBody.appendChild(botMessage);
  chatBody.scrollTop = chatBody.scrollHeight;
}

// Function to handle user input and provide bot responses
function processUserInput(message) {
  const userInput = message.toLowerCase();
  let botResponse;

  // Add your custom questions and answers here
  if (userInput.includes("hello") || userInput.includes("hi")) {
    botResponse = "Hello! How can I assist you today?";
  } else if (userInput.includes("how are you")) {
    botResponse = "I'm an AI chatbot, so I don't have feelings, but thank you for asking!";
  } else if (userInput.includes("help")) {
    botResponse = "Sure, I'm here to help. What do you need assistance with?";
  } else {
    botResponse = "I'm sorry, I couldn't understand that. Can you please rephrase your question?";
  }

  // Display bot response
  setTimeout(function() {
    appendBotMessage(botResponse);
  }, 500);
}

// Function to handle user input submission
function handleUserInput() {
  const userInput = document.getElementById("user-input");
  const message = userInput.value.trim();

  if (message !== "") {
    appendUserMessage(message);
    userInput.value = "";
  }
}

// Event listener for user input submission
document.getElementById("send-button").addEventListener("click", handleUserInput);
document.getElementById("user-input").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    handleUserInput();
  }
});

// Initial greeting from the chatbot
appendBotMessage("Hello! How can I assist you today?");
