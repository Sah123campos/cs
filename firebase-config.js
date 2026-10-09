/* firebase-config.js — CS Lite Evo */
window.firebaseConfig = {
  apiKey:            "AIzaSyAKuLtD1Sn-DSnuPZFjUMNDKRzCUO2BnIo",
  authDomain:        "csgame-65497.firebaseapp.com",
  databaseURL:       "https://csgame-65497-default-rtdb.firebaseio.com",
  projectId:         "csgame-65497",
  storageBucket:     "csgame-65497.firebasestorage.app",
  messagingSenderId: "524154929837",
  appId:             "1:524154929837:web:eaaba70017ee5e1ee6fc24"
};

window.duelRoomTemplate = {
  mode: "duel",
  status: "lobby",
  arena: "classic",
  createdAt: Date.now(),
  createdBy: "",
  players: {},
  winner: null
};

window.createPlayerData = function(displayName) {
  return {
    name: displayName || "Jogador",
    hp: 100,
    x: 0,
    z: 0,
    yaw: 0,
    weapon: "rifle",
    ready: false,
    lastUpdate: Date.now()
  };
};