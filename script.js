function sendMessage() {
  let input = document.getElementById("userInput").value;
  if (input.trim() === "") return;

  let messages = document.getElementById("messages");

  let userMsg = document.createElement("div");
  userMsg.className = "message user";
  userMsg.textContent = "You: " + input;
  messages.appendChild(userMsg);

  let botMsg = document.createElement("div");
  botMsg.className = "message bot";
  botMsg.textContent = "BeaHealth: " + getResponse(input);
  messages.appendChild(botMsg);

  document.getElementById("userInput").value = "";
  messages.scrollTop = messages.scrollHeight;
}

function getResponse(input) {
  input = input.toLowerCase();

  if (input.includes("nutrition")) {
    return "A balanced diet with fruits, vegetables, proteins, and whole grains is essential for good health.";
  }
  if (input.includes("exercise")) {
    return "Regular physical activity strengthens your body and mind. Aim for at least 30 minutes daily.";
  }
  if (input.includes("mental health")) {
    return "Mental health matters. Practice self-care, talk to trusted people, and seek professional help when needed.";
  }
  return "I’m here to help with health education. Could you ask me something about nutrition, exercise, or wellbeing?";
}
