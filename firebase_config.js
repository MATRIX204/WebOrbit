import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyBc5PBzQQk-W1NDy5-DQ217QbvYsahtiOs",
  authDomain: "bookmyevent-21cd8.firebaseapp.com",
  projectId: "bookmyevent-21cd8",
  storageBucket: "bookmyevent-21cd8.firebasestorage.app",
  messagingSenderId: "535972128829",
  appId: "1:535972128829:web:d07360b589ad13a8dfe254",
  measurementId: "G-R0DF8W0N81"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };