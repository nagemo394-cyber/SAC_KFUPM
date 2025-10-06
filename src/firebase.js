// // firebase.js
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
//
// const firebaseConfig = {
//     apiKey: "AIzaSyB3LOAYFPtX5I84YDtKQT9qOqXr8-T42PE",
//     authDomain: "sac-kfupm.firebaseapp.com",
//     projectId: "sac-kfupm",
//     storageBucket: "sac-kfupm.firebasestorage.app",
//     messagingSenderId: "186683698077",
//     appId: "1:186683698077:web:5c11f1775c15b088545d74"
// };
//
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
//
// // Firestore database
// export const db = getFirestore(app);
//
// // App Check (بدّل المفتاح بمفتاح reCAPTCHA v3 اللي جبناه من App Check)
// initializeAppCheck(app, {
//     provider: new ReCaptchaV3Provider("YOUR_RECAPTCHA_SITE_KEY"),
//     isTokenAutoRefreshEnabled: true,
// });
// src/firebase.js
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// فعّليه فقط إذا كان App Check مفعّل (Enforced) على Firestore:
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

const firebaseConfig = {
    apiKey: "AIzaSyB3LOAYFPtX5I84YDtKQT9qOqXr8-T42PE",
    authDomain: "sac-kfupm.firebaseapp.com",
    projectId: "sac-kfupm",
    // ملاحظة: اسم حاوية التخزين يكون عادةً <projectId>.appspot.com
    // لو عندك غيره من الـConsole خليه كما هو، وإلا استعملي السطر التالي:
    storageBucket: "sac-kfupm.appspot.com",
    messagingSenderId: "186683698077",
    appId: "1:186683698077:web:5c11f1775c15b088545d74",
};

// تأكدنا ما يصير إعادة تهيئة وقت الـHot Reload
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

// صدّري Firestore
export const db = getFirestore(app);

// ================= App Check =================
// إذا كان App Check على Firestore = Enforced:
// 1) روحي App Check بالكونسول وسوي reCAPTCHA v3 واحصلي الـSite Key
// 2) بدّلي "YOUR_RECAPTCHA_V3_SITE_KEY" بالمفتاح الحقيقي
// 3) تأكدي إن دوميناتك (localhost والدومين الفعلي) مضافة في App Check
//
// إذا (مو) مفعّل Enforced حالياً، تقدرين "تعطّلين" هالجزء لتفادي أخطاء 400.
initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider("YOUR_RECAPTCHA_V3_SITE_KEY"),
    isTokenAutoRefreshEnabled: true,
});
