import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD807faCbC_BnMUqUJylzdpdAbhG99Hfjk",
    authDomain: "junior-team-2.firebaseapp.com",
    projectId: "junior-team-2",
    storageBucket: "junior-team-2.appspot.com",
    messagingSenderId: "856173196180",
    appId: "1:856173196180:web:c7afd0c87b2cd76e405581",
    measurementId: "G-9WN399T44E"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };