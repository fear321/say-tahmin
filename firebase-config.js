// Firebase'in gerekli modüllerini import ediyoruz
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

// Firebase yapılandırma ayarları (Senin apiler burada olacak)
const firebaseConfig = {
    apiKey: "AIzaSyBRTgfhrA3mXOkmqSumBRvG5b4FqMHYm4M",
    authDomain: "sayitahmin-f0cdd.firebaseapp.com",
    projectId: "sayitahmin-f0cdd",
    storageBucket: "sayitahmin-f0cdd.firebasestorage.app",
    messagingSenderId: "354016505388",
    appId: "1:354016505388:web:853bb0402d813d2153eb89",
    measurementId: "G-1NQC3YJ0EL",
    databaseURL: "https://sayitahmin-f0cdd-default-rtdb.firebaseio.com/"
};

// Firebase'i başlatıyoruz
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

// Veritabanına veri yazma fonksiyonu
function writeUserData(userId, name, email) {
  set(ref(database, 'users/' + userId), {
    username: name,
    email: email
  }).then(() => {
    console.log("Veri başarıyla Firebase'e kaydedildi.");
  }).catch((error) => {
    console.error("Veri kaydetme hatası: ", error);
  });
}

// Firebase Auth ve Database'i dışarı aktarıyoruz
export { auth, database, writeUserData };
