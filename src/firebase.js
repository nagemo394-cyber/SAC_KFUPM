// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

const firebaseConfig = {
    apiKey: "AIzaSyB3LOAYFPtX5I84YDtKQT9qOqXr8-T42PE",
    authDomain: "sac-kfupm.firebaseapp.com",
    projectId: "sac-kfupm",
    storageBucket: "sac-kfupm.firebasestorage.app",
    messagingSenderId: "186683698077",
    appId: "1:186683698077:web:5c11f1775c15b088545d74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore database
export const db = getFirestore(app);

// App Check (بدّل المفتاح بمفتاح reCAPTCHA v3 اللي جبناه من App Check)
initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider("YOUR_RECAPTCHA_SITE_KEY"),
    isTokenAutoRefreshEnabled: true,
});