import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import 'firebase/database'
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGE_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);


const anotherFirebaseConfig={
  apiKey: process.env.REACT_APP_API_KEY,
  databaseURL: "https://junior-team-2-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const anotherApp = initializeApp(anotherFirebaseConfig, "anotherApp");
const anotherAuth = getAuth(anotherApp);
const database = getDatabase(anotherApp);

export { app, auth, storage, anotherApp, anotherAuth, database };