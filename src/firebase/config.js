// Importando os recursos necessários.
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase-firestore";

// Minha Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZRVHB_oQRrcSy6p9QDInZRRzJaGrvqsI",
  authDomain: "miniblog-caiohenrique.firebaseapp.com",
  projectId: "miniblog-caiohenrique",
  storageBucket: "miniblog-caiohenrique.appspot.com",
  messagingSenderId: "516385542343",
  appId: "1:516385542343:web:083ee782d1377c05f8eee2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Declarando meu db
const database = getFirestore(app);

// Por fim, preciso exportar meu banco de dados

export { database };
