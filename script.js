function showRegister() {
  document.getElementById("registerBox").style.display = "block";
  document.getElementById("loginBox").style.display = "none";
}

function showLogin() {
  document.getElementById("registerBox").style.display = "none";
  document.getElementById("loginBox").style.display = "block";
}

function register() {
  let newUsername = document.getElementById("newUsername").value;
  let newPassword = document.getElementById("newPassword").value;

  if (newUsername && newPassword) {
    // Save credentials in browser storage
    localStorage.setItem("username", newUsername);
    localStorage.setItem("password", newPassword);
    alert("Registration successful! You can now log in.");
    showLogin();
  } else {
    alert("Please enter both a username and password.");
  }
}

function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  let storedUser = localStorage.getItem("username");
  let storedPass = localStorage.getItem("password");

  if (username === storedUser && password === storedPass) {
    // Redirect to founder page
    window.location.href = "founder.html";
  } else {
    alert("Invalid login. Please try again or register.");
  }
}

function sendMessage() {
  let input = document.getElementById("userInput").value;
  if (input.trim() === "") return;

  let messages = document.getElementById("messages");

  // User message
  let userMsg = document.createElement("div");
  userMsg.className = "message user";
  userMsg.textContent = input;
  messages.appendChild(userMsg);

  // Bot response
  let botMsg = document.createElement("div");
  botMsg.className = "message bot";
  botMsg.textContent = getResponse(input);
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
  if (input.includes("sleep")) {
    return "Getting 7-9 hours of quality sleep each night is vital for recovery and wellbeing.";
  }
  if (input.includes("hygiene")) {
    return "Good hygiene, like washing hands regularly, helps prevent illness and keeps you healthy.";
  }
  return "I’m here to help with health education. Could you ask me something about nutrition, exercise, sleep, hygiene, or wellbeing?";
}

function sendMessage() {
  let input = document.getElementById("userInput").value;
  if (input.trim() === "") return;

  let messages = document.getElementById("messages");

  // User message bubble
  let userMsg = document.createElement("div");
  userMsg.className = "message user";
  userMsg.textContent = input;
  messages.appendChild(userMsg);

  // Bot response bubble
  let botMsg = document.createElement("div");
  botMsg.className = "message bot";
  botMsg.textContent = getResponse(input);
  messages.appendChild(botMsg);

  document.getElementById("userInput").value = "";
  messages.scrollTop = messages.scrollHeight;
}

function getResponse(input) {
  input = input.trim();

  const replies = [
    "That's an interesting thought. Let's explore it: " + input,
    "I hear you — here’s a perspective: " + input,
    "You asked: \"" + input + "\". BeaHealth is here to guide you.",
    "Good question! Here’s some guidance: " + input,
    "I understand. Let’s think about this together: " + input
  ];

  return replies[Math.floor(Math.random() * replies.length)];
}
