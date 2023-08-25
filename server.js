const WebSocket = require('ws');

const admin = require('firebase-admin');

const fs = require('fs');
const axios = require('axios');

// Replace with the appropriate time API endpoint
const timeApiUrl = 'https://world-clock.p.rapidapi.com/json/utc/now';

const getTimeFromAPI = async () => {
  try {
    const response = await axios.get('https://world-clock.p.rapidapi.com/json/utc/now', {
      headers: {
        'X-RapidAPI-Host': 'world-clock.p.rapidapi.com',
        'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY', // Replace with your RapidAPI key
      },
    });

    const timeData = response.data;
    const apiTime = new Date(timeData.currentDateTime);

    return apiTime;
  } catch (error) {
    console.error('Error fetching time from the API:', error);
    throw error;
  }
};
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

const port = process.env.PORT || 8080;

const wss = new WebSocket.Server({ port: port });



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
    ],
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
    ],
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
    ],
  },
  {
    "A_Set": [
      { 'suit': 'spade', 'card': '10' },
      { 'suit': 'heart', 'card': 'jack' },
      { 'suit': 'diamond', 'card': '4' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': '2' },
      { 'suit': 'spade', 'card': '5' },
      { 'suit': 'heart', 'card': '6' },
    ],
  },
  {
    "A_Set": [
      { 'suit': 'diamond', 'card': '8' },
      { 'suit': 'spade', 'card': 'queen' },
      { 'suit': 'heart', 'card': '9' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': 'king' },
      { 'suit': 'diamond', 'card': '7' },
      { 'suit': 'spade', 'card': '3' },
    ],
  },
  // Additional sets below
  {
    "A_Set": [
      { 'suit': 'heart', 'card': '2' },
      { 'suit': 'spade', 'card': '3' },
      { 'suit': 'diamond', 'card': '4' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': '5' },
      { 'suit': 'heart', 'card': '6' },
      { 'suit': 'spade', 'card': '7' },
    ],
  },
  {
    "A_Set": [
      { 'suit': 'diamond', 'card': 'queen' },
      { 'suit': 'spade', 'card': 'king' },
      { 'suit': 'heart', 'card': '10' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': 'jack' },
      { 'suit': 'diamond', 'card': '2' },
      { 'suit': 'spade', 'card': '4' },
    ],
  },
  {
    "A_Set": [
      { 'suit': 'heart', 'card': '8' },
      { 'suit': 'spade', 'card': '6' },
      { 'suit': 'diamond', 'card': '4' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': '2' },
      { 'suit': 'heart', 'card': '10' },
      { 'suit': 'spade', 'card': 'queen' },
    ],
  },
  {
    "A_Set": [
      { 'suit': 'diamond', 'card': '7' },
      { 'suit': 'spade', 'card': '5' },
      { 'suit': 'heart', 'card': '3' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': 'A' },
      { 'suit': 'diamond', 'card': 'king' },
      { 'suit': 'spade', 'card': '9' },
    ],
  },
  {
    "A_Set": [
      { 'suit': 'club', 'card': '8' },
      { 'suit': 'heart', 'card': '6' },
      { 'suit': 'diamond', 'card': '4' },
    ],
    "B_Set": [
      { 'suit': 'spade', 'card': '2' },
      { 'suit': 'diamond', 'card': '10' },
      { 'suit': 'club', 'card': 'queen' },
    ],
  },
];


const bwinning = [
  {
    "A_Set": [
      { 'suit': 'club', 'card': 'A' },
      { 'suit': 'heart', 'card': '2' },
      { 'suit': 'diamond', 'card': 'jack' },
    ],
    "B_Set": [
      { 'suit': 'spade', 'card': 'A' },
      { 'suit': 'heart', 'card': '4' },
      { 'suit': 'club', 'card': 'king' },
    ],
  },
  {
    "A_Set": [
      { 'suit': 'diamond', 'card': '5' },
      { 'suit': 'spade', 'card': '8' },
      { 'suit': 'heart', 'card': 'queen' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': '3' },
      { 'suit': 'diamond', 'card': '10' },
      { 'suit': 'spade', 'card': '7' },
    ],
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
    ],
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
    ],
  },
  {
    "A_Set": [
      { 'suit': 'spade', 'card': '10' },
      { 'suit': 'heart', 'card': 'jack' },
      { 'suit': 'diamond', 'card': '4' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': '2' },
      { 'suit': 'spade', 'card': '5' },
      { 'suit': 'heart', 'card': '6' },
    ],
  },
  // Additional sets below
  {
    "A_Set": [
      { 'suit': 'diamond', 'card': '7' },
      { 'suit': 'spade', 'card': '6' },
      { 'suit': 'heart', 'card': '5' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': '4' },
      { 'suit': 'diamond', 'card': '3' },
      { 'suit': 'spade', 'card': '2' },
    ],
  },
  {
    "A_Set": [
      { 'suit': 'club', 'card': '10' },
      { 'suit': 'heart', 'card': '9' },
      { 'suit': 'diamond', 'card': '8' },
    ],
    "B_Set": [
      { 'suit': 'spade', 'card': '7' },
      { 'suit': 'club', 'card': '6' },
      { 'suit': 'heart', 'card': '5' },
    ],
  },
  {
    "A_Set": [
      { 'suit': 'diamond', 'card': '4' },
      { 'suit': 'spade', 'card': '3' },
      { 'suit': 'heart', 'card': '2' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': 'A' },
      { 'suit': 'diamond', 'card': 'king' },
      { 'suit': 'spade', 'card': 'queen' },
    ],
  },
  {
    "A_Set": [
      { 'suit': 'club', 'card': '8' },
      { 'suit': 'heart', 'card': '9' },
      { 'suit': 'diamond', 'card': '10' },
    ],
    "B_Set": [
      { 'suit': 'spade', 'card': 'jack' },
      { 'suit': 'club', 'card': 'queen' },
      { 'suit': 'heart', 'card': 'king' },
    ],
  },
  {
    "A_Set": [
      { 'suit': 'diamond', 'card': '3' },
      { 'suit': 'spade', 'card': '5' },
      { 'suit': 'heart', 'card': '7' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': '9' },
      { 'suit': 'diamond', 'card': 'jack' },
      { 'suit': 'spade', 'card': 'king' },
    ],
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

// ...

// Define a function to send both current time and winning cards
function sendCurrentTimeAndCards() = async () =>{
  let currentTime = Math.floor((new Date() - startTime) / 1000); // Elapsed time in seconds
  // Replace winningCardSet with your actual winning card set ('a' or 'b')

  const db = admin.firestore();


// Use the timestamp as the document name


  // Reset the time when it reaches 100 seconds
  if (currentTime >= 100) {
    startTime = new Date();
    currentTime = 0;
  }

  // Send current time every second
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({ currentTime }));
    }
  });

  // Send selected cards after 99 seconds
  if (currentTime === 99) {
    let selectedCards = [];
    let winningSet = null;
    let winner = '';

    if (forceValue === 'a') {
      selectedCards = awinning[getRandomIndex(awinning)];
      winner = 'a';
    } else if (forceValue === 'b') {
      selectedCards = bwinning[getRandomIndex(bwinning)];
      winner = 'b';
    } else {
      const totalVotes = userVotes.a + userVotes.b;

      if (totalVotes > 0) {
        if (userVotes.a < userVotes.b) {
          winningSet = awinning;
          winner = 'a';
        } else if (userVotes.b < userVotes.a) {
          winningSet = bwinning;
          winner = 'b';
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


 try {
    const apiTime = await getTimeFromAPI();

    // Format the date and time
    const year = apiTime.getFullYear().toString();
    const month = (apiTime.getMonth() + 1).toString().padStart(2, '0'); // January is 0
    const date = apiTime.getDate().toString().padStart(2, '0');
    const hours = apiTime.getHours().toString().padStart(2, '0');
    const minutes = apiTime.getMinutes().toString().padStart(2, '0');
    const seconds = apiTime.getSeconds().toString().padStart(2, '0');

    const actualDate = `${year}/${month}/${date}`;
    const actualTime = `${hours}:${minutes}:${seconds}`;

    // Reference to the "Winning Cards" collection
    const winningCardsCollection = admin.firestore().collection('Winning Cards');

    // Reference to the year document (e.g., "2023")
    const yearDocument = winningCardsCollection.doc(year);

    // Reference to the "Months" subcollection inside the year document
    const monthsCollection = yearDocument.collection('Months');

    // Reference to the month document (e.g., "08")
    const monthDocument = monthsCollection.doc(month);

    // Reference to the "Dates" subcollection inside the month document
    const datesCollection = monthDocument.collection('Dates');

    // Reference to the date document (e.g., "25")
    const dateDocument = datesCollection.doc(date);

    const cardCollection = dateDocument.collection('winners');

    // Data to be stored in the date document
    const data = {
      winningCard: 'a', // Set this to the actual winning card ('a' or 'b')
      date: actualDate,
      time: actualTime,
    };

    // Set the data in the date document
    await cardCollection.add(data);

    console.log('Data successfully written to Firestore');
  } catch (error) {
    console.error('Error creating the document:', error);
  }

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



wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.send(JSON.stringify(lastResponses));

  ws.on('message', (message) => {
    console.log('Received:', message);
    try {
      const data = JSON.parse(message);
      const { key, value, force } = data;
      console.log(key);
      console.log(value);
      console.log(force);

      if (force === 'a' || force === 'b') {
        forceValue = force;
      } else if (key === 'a') {
        userVotes.a += value;
      } else if (key === 'b') {
        userVotes.b += value;
      }
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
