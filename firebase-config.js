// ═══ FIREBASE CONFIGURATION & WRAPPER ═════════════════════════
const firebaseConfig = {
  apiKey: "AIzaSyD5u8n3Q9oEfs80kM7ahLh9OC9KrlB2k0o",
  authDomain: "prep-class-cbbea.firebaseapp.com",
  projectId: "prep-class-cbbea",
  storageBucket: "prep-class-cbbea.firebasestorage.app",
  messagingSenderId: "477765744456",
  appId: "1:477765744456:web:8fa15359bb9bb10ca0a57d",
  measurementId: "G-J9QMNVWQHV"
};

// Initialize Firebase Compat
firebase.initializeApp(firebaseConfig);
const fdb = firebase.firestore();

const K = { U: 's4u', C: 's4c', S: 's4s', A: 's4a', R: 's4r' };

const db = {
  get: async (k) => {
    try {
      const doc = await fdb.collection('dashboardData').doc(k).get();
      return doc.exists ? doc.data().list : null;
    } catch (e) {
      console.error("Firebase se data fetch karne me error:", e);
      return null;
    }
  },
  set: (k, v) => {
    try {
      fdb.collection('dashboardData').doc(k).set({ list: v });
    } catch (e) {
      console.error("Firebase me data save karne me error:", e);
    }
  }
};
