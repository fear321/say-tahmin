// firebase-config.js zaten dahil edildiği için burada sadece veritabanı işlemleri yapılacak.

// Veritabanına kullanıcı verisi kaydetme
function saveUserData(userId, userData) {
    const userRef = ref(database, 'users/' + userId);
    set(userRef, userData)
      .then(() => {
        console.log("Veri başarıyla kaydedildi.");
      })
      .catch((error) => {
        console.error("Veri kaydetme hatası: ", error);
      });
  }
  
  // Örnek kullanım: (bunu çalıştırarak veritabanına veri kaydedebilirsiniz)
  const userId = "12345"; // Kullanıcının ID'si
  const userData = {
    username: "john_doe",
    email: "john.doe@example.com",
    balance: 5.00
  };
  
  saveUserData(userId, userData);
  
  // Veritabanından kullanıcı verisi çekme
  function getUserData(userId) {
    const userRef = ref(database, 'users/' + userId);
    get(userRef).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error("Veri çekme hatası: ", error);
    });
  }
  
  // Örnek kullanım: (veritabanından veri çekebilirsiniz)
  getUserData("12345");
  