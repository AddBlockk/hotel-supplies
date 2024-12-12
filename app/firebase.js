import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAE_cjOLAxlnORxm7yy1om83D0mgWNLvCc",
  authDomain: "hotel-supplies-45775.firebaseapp.com",
  projectId: "hotel-supplies-45775",
  storageBucket: "hotel-supplies-45775.firebasestorage.app",
  messagingSenderId: "383542038456",
  appId: "1:383542038456:web:ea56e425a060538d77094d",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { app, database, storage, auth };
