// Copie este arquivo para firebase-config.js e preencha com os dados reais do seu projeto.
// Depois inclua no HTML antes do seu script principal.

export const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_PROJETO.firebaseapp.com",
  databaseURL: "https://SEU_PROJETO-default-rtdb.firebaseio.com",
  projectId: "SEU_PROJETO",
  storageBucket: "SEU_PROJETO.appspot.com",
  messagingSenderId: "SEU_MESSAGING_SENDER_ID",
  appId: "SEU_APP_ID",
};

export const duelRoomTemplate = {
  mode: "duel",
  status: "lobby",
  arena: "classic",
  createdAt: Date.now(),
  createdBy: "",
  players: {},
  winner: null,
};

export const createPlayerData = (displayName) => ({
  name: displayName || "Jogador",
  hp: 100,
  x: 0,
  z: 0,
  yaw: 0,
  weapon: "rifle",
  ready: false,
  lastUpdate: Date.now(),
});
