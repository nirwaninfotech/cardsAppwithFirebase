const WebSocket = require('ws');

const admin = require('firebase-admin');

const fs = require('fs');

// Specify the path to your secret file
// const secretFilePath = '/etc/secrets/firebaseKey.json';
const serviceAccount = JSON.parse(fs.readFileSync('/etc/secrets/firebaseKey.json', 'utf8'));

try {
  // // Read the content of the secret file
  // const secretFileContents = fs.readFileSync(secretFilePath, 'utf8');
  
  // // Parse the JSON content if it's a JSON file
  // const serviceAccount = JSON.parse(secretFileContents);
const serviceAccount = JSON.parse(fs.readFileSync('/etc/secrets/firebaseKey.json', 'utf8'));

  
  // Now you can use secretData in your application
  // For example, if it contains a Firebase key:
  // const firebaseConfig = secretData.firebase;
  
  // Continue with your application logic...
} catch (err) {
  console.error('Error reading or parsing secret file:', err);
}


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // // Replace with your Firebase Database URL
});
const firebase = require('firebase-admin');

const port = process.env.PORT || 8080;

const wss = new WebSocket.Server({ port: port });

const drawCards = [
  {
    "A_Set": [
      { 'suit': 'club', 'card': '2' },
      { 'suit': 'diamond', 'card': '3' },
      { 'suit': 'spade', 'card': '4' },
    ],
    "B_Set": [
      { 'suit': 'heart', 'card': '5' },
      { 'suit': 'diamond', 'card': '6' },
      { 'suit': 'spade', 'card': '7' },
    ]
  },
  {
    "A_Set": [
      { 'suit': 'spade', 'card': '5' },
      { 'suit': 'diamond', 'card': '6' },
      { 'suit': 'heart', 'card': '7' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': '2' },
      { 'suit': 'diamond', 'card': '3' },
      { 'suit': 'spade', 'card': '4' },
    ]
  },
  {
    "A_Set": [
      { 'suit': 'diamond', 'card': '2' },
      { 'suit': 'spade', 'card': '3' },
      { 'suit': 'heart', 'card': '4' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': '8' },
      { 'suit': 'diamond', 'card': '9' },
      { 'suit': 'spade', 'card': '10' },
    ]
  },
  {
    "A_Set": [
      { 'suit': 'club', 'card': '9' },
      { 'suit': 'heart', 'card': '10' },
      { 'suit': 'diamond', 'card': 'king' },
    ],
    "B_Set": [
      { 'suit': 'spade', 'card': '6' },
      { 'suit': 'heart', 'card': '3' },
      { 'suit': 'club', 'card': '8' },
    ]
  },
  {
    "A_Set": [
      { 'suit': 'spade', 'card': '3' },
      { 'suit': 'diamond', 'card': '4' },
      { 'suit': 'heart', 'card': '5' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': '6' },
      { 'suit': 'spade', 'card': '7' },
      { 'suit': 'diamond', 'card': '8' },
    ]
  },
  {
    "A_Set": [
      { 'suit': 'club', 'card': '2' },
      { 'suit': 'diamond', 'card': '3' },
      { 'suit': 'spade', 'card': '4' },
    ],
    "B_Set": [
      { 'suit': 'heart', 'card': '5' },
      { 'suit': 'diamond', 'card': '6' },
      { 'suit': 'spade', 'card': '7' },
    ]
  },
  {
    "A_Set": [
      { 'suit': 'spade', 'card': '5' },
      { 'suit': 'diamond', 'card': '6' },
      { 'suit': 'heart', 'card': '7' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': '2' },
      { 'suit': 'diamond', 'card': '3' },
      { 'suit': 'spade', 'card': '4' },
    ]
  },
  {
    "A_Set": [
      { 'suit': 'diamond', 'card': '2' },
      { 'suit': 'spade', 'card': '3' },
      { 'suit': 'heart', 'card': '4' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': '8' },
      { 'suit': 'diamond', 'card': '9' },
      { 'suit': 'spade', 'card': '10' },
    ]
  },
  {
    "A_Set": [
      { 'suit': 'club', 'card': '9' },
      { 'suit': 'heart', 'card': '10' },
      { 'suit': 'diamond', 'card': 'king' },
    ],
    "B_Set": [
      { 'suit': 'spade', 'card': '6' },
      { 'suit': 'heart', 'card': '3' },
      { 'suit': 'club', 'card': '8' },
    ]
  },
];


const awinning = [
  {
    "A_Set": [
      { 'suit': 'diamond', 'card': '4' },
      { 'suit': 'club', 'card': '5' },
      { 'suit': 'heart', 'card': '6' },
    ],
    "B_Set": [
      { 'suit': 'spade', 'card': '7' },
      { 'suit': 'diamond', 'card': '8' },
      { 'suit': 'club', 'card': '9' },
    ]
  },
  {
    "A_Set": [
      { 'suit': 'club', 'card': '9' },
      { 'suit': 'heart', 'card': '10' },
      { 'suit': 'diamond', 'card': 'king' },
    ],
    "B_Set": [
      { 'suit': 'spade', 'card': '6' },
      { 'suit': 'heart', 'card': '3' },
      { 'suit': 'club', 'card': '8' },
    ]
  },
  {
    "A_Set": [
      { 'suit': 'diamond', 'card': 'queen' },
      { 'suit': 'spade', 'card': '2' },
      { 'suit': 'heart', 'card': '7' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': '4' },
      { 'suit': 'diamond', 'card': '6' },
      { 'suit': 'spade', 'card': '9' },
    ]
  },
  {
    "A_Set": [
      { 'suit': 'spade', 'card': '10' },
      { 'suit': 'diamond', 'card': '8' },
      { 'suit': 'heart', 'card': '7' },
    ],
    "B_Set": [
      { 'suit': 'heart', 'card': '9' },
      { 'suit': 'spade', 'card': 'king' },
      { 'suit': 'diamond', 'card': 'queen' },
    ]
  },
  {
    "A_Set": [
      { 'suit': 'club', 'card': '2' },
      { 'suit': 'spade', 'card': '3' },
      { 'suit': 'heart', 'card': '4' },
    ],
    "B_Set": [
      { 'suit': 'diamond', 'card': '9' },
      { 'suit': 'spade', 'card': '8' },
      { 'suit': 'club', 'card': '10' },
    ]
  },
  {
    "A_Set": [
      { 'suit': 'spade', 'card': '5' },
      { 'suit': 'diamond', 'card': '6' },
      { 'suit': 'heart', 'card': '7' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': '8' },
      { 'suit': 'spade', 'card': '9' },
      { 'suit': 'diamond', 'card': '10' },
    ]
  },
  {
    "A_Set": [
      { 'suit': 'heart', 'card': 'ace' },
      { 'suit': 'spade', 'card': 'king' },
      { 'suit': 'diamond', 'card': 'queen' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': 'jack' },
      { 'suit': 'spade', 'card': '10' },
      { 'suit': 'heart', 'card': '9' },
    ]
  },
  {
    "A_Set": [
      { 'suit': 'diamond', 'card': '2' },
      { 'suit': 'spade', 'card': '3' },
      { 'suit': 'heart', 'card': '4' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': '8' },
      { 'suit': 'diamond', 'card': '9' },
      { 'suit': 'spade', 'card': '10' },
    ]
  },
  {
    "A_Set": [
      { 'suit': 'heart', 'card': '5' },
      { 'suit': 'diamond', 'card': '6' },
      { 'suit': 'spade', 'card': '7' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': '8' },
      { 'suit': 'spade', 'card': '9' },
      { 'suit': 'diamond', 'card': '10' },
    ]
  },
  {
    "A_Set": [
      { 'suit': 'club', 'card': 'king' },
      { 'suit': 'spade', 'card': 'queen' },
      { 'suit': 'heart', 'card': 'jack' },
    ],
    "B_Set": [
      { 'suit': 'diamond', 'card': 'ace' },
      { 'suit': 'spade', 'card': '2' },
      { 'suit': 'club', 'card': '3' },
    ]
  },
  {
    "A_Set": [
      { 'suit': 'spade', 'card': '10' },
      { 'suit': 'heart', 'card': 'jack' },
      { 'suit': 'diamond', 'card': 'queen' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': 'king' },
      { 'suit': 'spade', 'card': 'ace' },
      { 'suit': 'heart', 'card': '2' },
    ]
  },
  {
    "A_Set": [
      { 'suit': 'diamond', 'card': '5' },
      { 'suit': 'spade', 'card': '6' },
      { 'suit': 'heart', 'card': '7' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': '8' },
      { 'suit': 'spade', 'card': '9' },
      { 'suit': 'diamond', 'card': '10' },
    ]
  },
  {
    "A_Set": [
      { 'suit': 'heart', 'card': 'king' },
      { 'suit': 'diamond', 'card': 'queen' },
      { 'suit': 'spade', 'card': 'ace' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': 'jack' },
      { 'suit': 'spade', 'card': '10' },
      { 'suit': 'heart', 'card': '9' },
    ]
  },
  {
    "A_Set": [
      { 'suit': 'spade', 'card': '3' },
      { 'suit': 'diamond', 'card': '4' },
      { 'suit': 'heart', 'card': '5' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': '6' },
      { 'suit': 'spade', 'card': '7' },
      { 'suit': 'diamond', 'card': '8' },
    ]
  },
  {
    "A_Set": [
      { 'suit': 'diamond', 'card': '2' },
      { 'suit': 'spade', 'card': '3' },
      { 'suit': 'heart', 'card': '4' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': '8' },
      { 'suit': 'diamond', 'card': '9' },
      { 'suit': 'spade', 'card': '10' },
    ]
  },
  {
    "A_Set": [
      { 'suit': 'heart', 'card': '5' },
      { 'suit': 'diamond', 'card': '6' },
      { 'suit': 'spade', 'card': '7' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': '8' },
      { 'suit': 'spade', 'card': '9' },
      { 'suit': 'diamond', 'card': '10' },
    ]
  },
  {
    "A_Set": [
      { 'suit': 'club', 'card': 'king' },
      { 'suit': 'spade', 'card': 'queen' },
      { 'suit': 'heart', 'card': 'jack' },
    ],
    "B_Set": [
      { 'suit': 'diamond', 'card': 'ace' },
      { 'suit': 'spade', 'card': '2' },
      { 'suit': 'club', 'card': '3' },
    ]
  },
  {
    "A_Set": [
      { 'suit': 'spade', 'card': '10' },
      { 'suit': 'heart', 'card': 'jack' },
      { 'suit': 'diamond', 'card': 'queen' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': 'king' },
      { 'suit': 'spade', 'card': 'ace' },
      { 'suit': 'heart', 'card': '2' },
    ]
  },
  {
    "A_Set": [
      { 'suit': 'diamond', 'card': '5' },
      { 'suit': 'spade', 'card': '6' },
      { 'suit': 'heart', 'card': '7' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': '8' },
      { 'suit': 'spade', 'card': '9' },
      { 'suit': 'diamond', 'card': '10' },
    ]
  },
  {
    "A_Set": [
      { 'suit': 'heart', 'card': 'king' },
      { 'suit': 'diamond', 'card': 'queen' },
      { 'suit': 'spade', 'card': 'ace' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': 'jack' },
      { 'suit': 'spade', 'card': '10' },
      { 'suit': 'heart', 'card': '9' },
    ]
  },
  {
    "A_Set": [
      { 'suit': 'spade', 'card': '3' },
      { 'suit': 'diamond', 'card': '4' },
      { 'suit': 'heart', 'card': '5' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': '6' },
      { 'suit': 'spade', 'card': '7' },
      { 'suit': 'diamond', 'card': '8' },
    ]
  },
];



const bwinning = [
  {
    "A_Set": [
      { 'suit': 'club', 'card': '2' },
      { 'suit': 'diamond', 'card': '3' },
      { 'suit': 'spade', 'card': '4' },
    ],
    "B_Set": [
      { 'suit': 'heart', 'card': '5' },
      { 'suit': 'diamond', 'card': '6' },
      { 'suit': 'spade', 'card': '7' },
    ]
  },
  {
    "A_Set": [
      { 'suit': 'spade', 'card': '5' },
      { 'suit': 'diamond', 'card': '6' },
      { 'suit': 'heart', 'card': '7' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': '2' },
      { 'suit': 'diamond', 'card': '3' },
      { 'suit': 'spade', 'card': '4' },
    ]
  },
  {
    "A_Set": [
      { 'suit': 'diamond', 'card': '2' },
      { 'suit': 'spade', 'card': '3' },
      { 'suit': 'heart', 'card': '4' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': '8' },
      { 'suit': 'diamond', 'card': '9' },
      { 'suit': 'spade', 'card': '10' },
    ]
  },
  {
    "A_Set": [
      { 'suit': 'club', 'card': '9' },
      { 'suit': 'heart', 'card': '10' },
      { 'suit': 'diamond', 'card': 'king' },
    ],
    "B_Set": [
      { 'suit': 'spade', 'card': '6' },
      { 'suit': 'heart', 'card': '3' },
      { 'suit': 'club', 'card': '8' },
    ]
  },
  {
    "A_Set": [
      { 'suit': 'spade', 'card': '3' },
      { 'suit': 'diamond', 'card': '4' },
      { 'suit': 'heart', 'card': '5' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': '6' },
      { 'suit': 'spade', 'card': '7' },
      { 'suit': 'diamond', 'card': '8' },
    ]
  },
  {
    "A_Set": [
      { 'suit': 'diamond', 'card': 'queen' },
      { 'suit': 'spade', 'card': '2' },
      { 'suit': 'heart', 'card': '7' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': '4' },
      { 'suit': 'diamond', 'card': '6' },
      { 'suit': 'spade', 'card': '9' },
    ]
  },
  {
    "A_Set": [
      { 'suit': 'spade', 'card': '10' },
      { 'suit': 'diamond', 'card': '8' },
      { 'suit': 'heart', 'card': '7' },
    ],
    "B_Set": [
      { 'suit': 'heart', 'card': '9' },
      { 'suit': 'spade', 'card': 'king' },
      { 'suit': 'diamond', 'card': 'queen' },
    ]
  },
  {
    "A_Set": [
      { 'suit': 'heart', 'card': 'ace' },
      { 'suit': 'spade', 'card': 'king' },
      { 'suit': 'diamond', 'card': 'queen' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': 'jack' },
      { 'suit': 'spade', 'card': '10' },
      { 'suit': 'heart', 'card': '9' },
    ]
  },
  {
    "A_Set": [
      { 'suit': 'club', 'card': '2' },
      { 'suit': 'spade', 'card': '3' },
      { 'suit': 'heart', 'card': '4' },
    ],
    "B_Set": [
      { 'suit': 'diamond', 'card': '9' },
      { 'suit': 'spade', 'card': '8' },
      { 'suit': 'club', 'card': '10' },
    ]
  },
  {
    "A_Set": [
      { 'suit': 'spade', 'card': '5' },
      { 'suit': 'diamond', 'card': '6' },
      { 'suit': 'heart', 'card': '7' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': '8' },
      { 'suit': 'spade', 'card': '9' },
      { 'suit': 'diamond', 'card': '10' },
    ]
  },
  {
    "A_Set": [
      { 'suit': 'heart', 'card': '2' },
      { 'suit': 'diamond', 'card': '3' },
      { 'suit': 'spade', 'card': '4' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': '5' },
      { 'suit': 'spade', 'card': '6' },
      { 'suit': 'heart', 'card': '7' },
    ]
  },
  {
    "A_Set": [
      { 'suit': 'diamond', 'card': '2' },
      { 'suit': 'spade', 'card': '3' },
      { 'suit': 'heart', 'card': '4' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': '8' },
      { 'suit': 'diamond', 'card': '9' },
      { 'suit': 'spade', 'card': '10' },
    ]
  },
  {
    "A_Set": [
      { 'suit': 'club', 'card': '9' },
      { 'suit': 'heart', 'card': '10' },
      { 'suit': 'diamond', 'card': 'king' },
    ],
    "B_Set": [
      { 'suit': 'spade', 'card': '6' },
      { 'suit': 'heart', 'card': '3' },
      { 'suit': 'club', 'card': '8' },
    ]
  },
  {
    "A_Set": [
      { 'suit': 'spade', 'card': '10' },
      { 'suit': 'diamond', 'card': '8' },
      { 'suit': 'heart', 'card': '7' },
    ],
    "B_Set": [
      { 'suit': 'heart', 'card': '9' },
      { 'suit': 'spade', 'card': 'king' },
      { 'suit': 'diamond', 'card': 'queen' },
    ]
  },
  {
    "A_Set": [
      { 'suit': 'diamond', 'card': 'queen' },
      { 'suit': 'spade', 'card': '2' },
      { 'suit': 'heart', 'card': '7' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': '4' },
      { 'suit': 'diamond', 'card': '6' },
      { 'suit': 'spade', 'card': '9' },
    ]
  },
  {
    "A_Set": [
      { 'suit': 'heart', 'card': '5' },
      { 'suit': 'diamond', 'card': '6' },
      { 'suit': 'spade', 'card': '7' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': '2' },
      { 'suit': 'spade', 'card': '3' },
      { 'suit': 'heart', 'card': '4' },
    ]
  },
  {
    "A_Set": [
      { 'suit': 'club', 'card': 'king' },
      { 'suit': 'spade', 'card': 'queen' },
      { 'suit': 'heart', 'card': 'jack' },
    ],
    "B_Set": [
      { 'suit': 'diamond', 'card': 'ace' },
      { 'suit': 'spade', 'card': '2' },
      { 'suit': 'club', 'card': '3' },
    ]
  },
  {
    "A_Set": [
      { 'suit': 'spade', 'card': '10' },
      { 'suit': 'heart', 'card': 'jack' },
      { 'suit': 'diamond', 'card': 'queen' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': 'king' },
      { 'suit': 'spade', 'card': 'ace' },
      { 'suit': 'heart', 'card': '2' },
    ]
  },
  {
    "A_Set": [
      { 'suit': 'diamond', 'card': '5' },
      { 'suit': 'spade', 'card': '6' },
      { 'suit': 'heart', 'card': '7' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': '8' },
      { 'suit': 'spade', 'card': '9' },
      { 'suit': 'diamond', 'card': '10' },
    ]
  },
  {
    "A_Set": [
      { 'suit': 'heart', 'card': 'king' },
      { 'suit': 'diamond', 'card': 'queen' },
      { 'suit': 'spade', 'card': 'ace' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': 'jack' },
      { 'suit': 'spade', 'card': '10' },
      { 'suit': 'heart', 'card': '9' },
    ]
  },
  {
    "A_Set": [
      { 'suit': 'spade', 'card': '3' },
      { 'suit': 'diamond', 'card': '4' },
      { 'suit': 'heart', 'card': '5' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': '6' },
      { 'suit': 'spade', 'card': '7' },
      { 'suit': 'diamond', 'card': '8' },
    ]
  },
];
  
let userVotes = {
  a: 0,
  b: 0,
};

const lastResponses = [];

let forceValue = null;

let startTime = new Date();

function getRandomIndex(list) {
  return Math.floor(Math.random() * list.length);
}

let sessionId = generateSessionId(); // Generate an initial sessionId

function generateSessionId() {
  // Generate a unique sessionId, e.g., using a timestamp
  return `X95TP_${new Date().getTime()}`;
}


// ...

// Define a function to send both current time and winning cards
function sendCurrentTimeAndCards() {
  let currentTime = Math.floor((new Date() - startTime) / 1000); // Elapsed time in seconds
  // Replace winningCardSet with your actual winning card set ('a' or 'b')

  const db = admin.firestore();


// Use the timestamp as the document name


  // Reset the time when it reaches 100 seconds
  if (currentTime >= 65) {
    startTime = new Date();
    currentTime = 0;
    sessionId = generateSessionId();
  }

  // Send current time every second
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({ currentTime }));
    }
  });

  // Send selected cards after 99 seconds
  if (currentTime === 64) {
    let selectedCards = [];
    let winningSet = null;
    let winner = '';

    if (forceValue === 'a') {
      selectedCards = awinning[getRandomIndex(awinning)];
      winner = 'a';
    } else if (forceValue === 'b') {
      selectedCards = bwinning[getRandomIndex(bwinning)];
      winner = 'b';
    }else if (forceValue === 'd') {
      selectedCards = drawCards[getRandomIndex(bwinning)];
      winner = 'd';
    }
    else {
      const totalVotes = userVotes.a + userVotes.b;

      if (totalVotes > 0) {
        if (userVotes.a < userVotes.b) {
          winningSet = awinning;
          winner = 'a';
        } else if (userVotes.b < userVotes.a) {
          winningSet = bwinning;
          winner = 'b';
        }else if (userVotes.b == userVotes.a) {
          winningSet = drawCards;
          winner = 'd';
        }
         else {
          // Randomly choose between awinning and bwinning
          if (Math.random() < 0.5) {
            winningSet = awinning;
            winner = 'a';
          } else {
            winningSet = bwinning;
            winner = 'b';
          }
        }
      } else {
        // Randomly choose between awinning and bwinning
        if (Math.random() < 0.5) {
          winningSet = awinning;
          winner = 'a';
        } else {
          winningSet = bwinning;
          winner = 'b';
        }
      }
    }

    if (winningSet) {
      selectedCards = winningSet[getRandomIndex(winningSet)];
    }

    const response = {
      winner: winner,
      cards: selectedCards,
    };


    const today = new Date(); // Get the current date and time
// Increase the date and time by 5 hours and 30 minutes
today.setHours(today.getHours() + 5);
today.setMinutes(today.getMinutes() + 30);

// Now 'today' contains the date and time increased by 5 hours and 30 minutes

const year = today.getFullYear().toString();
const month = (today.getMonth() + 1).toString().padStart(2, '0'); // January is 0
const date = today.getDate().toString().padStart(2, '0');
const acutualTime = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
const actualDate = `${year}/${month}/${date}`;
const yearMonth = `${year}-${month}`;

// Reference to the "Winning Cards" collection
const winningCardsCollection = db.collection('Teen Patti Winning Cards');

// Reference to the year document (e.g., "2023")
const yearDocument = winningCardsCollection.doc(yearMonth);

// Reference to the month collection (e.g., "08")
const dateCollection = yearDocument.collection('dates');

// Reference to the date document (e.g., "23")
const dateDocument = dateCollection.doc(date);

// Reference to the "winners" collection within the date document
const cardCollection = dateDocument.collection('winners');

// Data to be stored in the "winners" collection
const data = {
  winningCard: winner, // Set this to the actual winning card ('a' or 'b')
  time: acutualTime, // Add the current time to the data
  date : actualDate,
  timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  sessionId: sessionId,
};

// Add the data to the "winners" collection
cardCollection.doc(acutualTime).set(data)
  .then(() => {
    console.log('Data successfully written to Firestore');
  })
  .catch((error) => {
    console.error('Error writing data to Firestore: ', error);
  });


    lastResponses.unshift(response.winner);
    if (lastResponses.length > 10) {
      lastResponses.pop();
    }

    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(response));
        client.send(JSON.stringify(lastResponses));
      }
    });

    // Reset userVotes
    userVotes = {
      a: 0,
      b: 0,
    };
    forceValue = null;
  }
}

// Start sending current time every second
setInterval(() => {
  sendCurrentTimeAndCards(); // Call the function to send both time and cards
}, 1000); // Update time every second

// ...



// ...

wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.send(JSON.stringify(lastResponses));

  ws.on('message', (message) => {
    console.log('Received:', message);
    try {
      const data = JSON.parse(message);
      const { secretKey, key, value, force,request } = data;
      console.log(key);
      console.log(value);
      console.log(force);

      let success = false; // Initialize success as false
      if (secretKey == "DHIEKDLNKDNKDIJFPJ4565DDJEJKJSNDNNWUEYJFNALJKEL23ELSN"){
      if (request === 'live_bet') {
        // Handle the live_bet request here and send updates continuously
        // You can use a setInterval to send updates at regular intervals to the specific user.
        setInterval(() => {
          if (ws.readyState === WebSocket.OPEN) {
            // Send updates here, e.g., current bets on 'a' and 'b'
            ws.send(JSON.stringify({ live_bet_b: userVotes.b, live_bet_a: userVotes.a, }));
          }
        }, 1000); // Send updates every second
      }
        if (force === 'a' || force === 'b' || force == 'd' && currentTime < 98) {
          console.log('Force alue:', force);
          forceValue = force;
          success = true;
        }
      }

      if (secretKey === 'DDFKIEKKBN12JKKFFK6') {
        // Secret key matches, proceed with other checks
         if (key === 'a' && currentTime < 97) { // Check currentTime before incrementing votes
          userVotes.a += value;
          success = true;
        } else if (key === 'b' && currentTime < 97) { // Check currentTime before incrementing votes
          userVotes.b += value;
          success = true;
        }
      }

      // Send the success status back to the client
      ws.send(JSON.stringify({ sessionId, success }));

    } catch (error) {
      console.error('Error parsing message:', error);
    }
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });

  // Send initial current time status to the newly connected client
  const currentTime = Math.floor((new Date() - startTime) / 1000); // Elapsed time in seconds
  ws.send(JSON.stringify({ currentTime }));
});
