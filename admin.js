import { getDatabase, ref, update } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Firebase config ve auth
const firebaseConfig = {
    apiKey: "AIzaSyBRTgfhrA3mXOkmqSumBRvG5b4FqMHYm4M",
    authDomain: "sayitahmin-f0cdd.firebaseapp.com",
    projectId: "sayitahmin-f0cdd",
    storageBucket: "sayitahmin-f0cdd.firebasestorage.app",
    messagingSenderId: "354016505388",
    appId: "1:354016505388:web:853bb0402d813d2153eb89",
    measurementId: "G-1NQC3YJ0EL"
};

// Firebase'i başlatıyoruz
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase();

// Kullanıcı bakiyesi güncelleme fonksiyonu
function updateUserBalance(userId, newBalance) {
  const userRef = ref(database, 'users/' + userId);
  update(userRef, {
    balance: newBalance
  }).then(() => {
    alert('Bakiye başarıyla güncellendi');
  }).catch((error) => {
    alert('Bakiye güncelleme hatası: ' + error.message);
  });
}

// Admin giriş kontrolü
onAuthStateChanged(auth, (user) => {
  if (user) {
    // Admin giriş yaptı, formu aktif et
  } else {
    // Admin giriş yapmamış
    alert("Lütfen giriş yapın.");
    window.location.href = "login.html"; // Admin giriş sayfasına yönlendir
  }
});

document.getElementById('updateBalanceButton').addEventListener('click', function() {
  const userId = document.getElementById('userId').value;
  const balance = parseFloat(document.getElementById('newBalance').value);

  if (userId && !isNaN(balance)) {
    updateUserBalance(userId, balance);
  } else {
    alert('Lütfen geçerli bir kullanıcı ID\'si ve bakiye girin.');
  }
});
