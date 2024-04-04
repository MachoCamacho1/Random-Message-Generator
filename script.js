// Message components
const greetings = ['Hello', 'Hi', 'Hey', 'Greetings'];
const subjects = ['world', 'everyone', 'friends', 'folks'];
const verbs = ['enjoy', 'love', 'like', 'appreciate'];
const objects = ['coding', 'programming', 'learning', 'creating'];

// Function to generate a random element from an array
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Function to generate a random message
function generateMessage() {
    console.log('Button clicked');
  const greeting = getRandomElement(greetings);
  const subject = getRandomElement(subjects);
  const verb = getRandomElement(verbs);
  const object = getRandomElement(objects);

  const formattedMessage = formatMessage(greeting, subject, verb, object);
  displayMessage(formattedMessage);
}

// Function to format the message
function formatMessage(greeting, subject, verb, object) {
  return `${greeting}, ${subject}! Let's ${verb} ${object}.`;
}

// Function to display the message on the HTML page
function displayMessage(message) {
  const messageElement = document.getElementById('message');
  messageElement.textContent = message;
}

// Event listener for the button click
document.getElementById('generateButton').addEventListener('click', generateMessage);
