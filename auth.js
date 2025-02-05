import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { writeUserData } from "./firebase-config.js"; // firebase-config.js dosyasını import ediyoruz

// Kullanıcı kayıt fonksiyonu
function registerUser(email, password, name) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Kullanıcı başarıyla oluşturuldu
      const user = userCredential.user;

      // Veritabanına kullanıcı verilerini yazıyoruz
      writeUserData(user.uid, name, email);
      
      console.log("Kullanıcı başarıyla kaydedildi ve verileri Firebase'e yazıldı.");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(`Hata: ${errorCode} - ${errorMessage}`);
    });
}
