// firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDA8lnFt3izDfmjo8-VAZ-tTVpJsiZsVg4",
    authDomain: "image-upload-12293.firebaseapp.com",
    projectId: "image-upload-12293",
    storageBucket: "image-upload-12293.appspot.com",
    messagingSenderId: "800014498031",
    appId: "1:800014498031:web:9195f163e747f6b494031a",
    measurementId: "G-JYSLRT0RW0"
  };
  const app = initializeApp(firebaseConfig);
  export const storage = getStorage(app);

