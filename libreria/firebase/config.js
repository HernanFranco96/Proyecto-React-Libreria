import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBCpirp5Hd8tZKB27w67pDZ_frEnbNnRGw",
  authDomain: "libreria-hernan.firebaseapp.com",
  projectId: "libreria-hernan",
  storageBucket: "libreria-hernan.appspot.com",
  messagingSenderId: "330763083308",
  appId: "1:330763083308:web:9c0f14abd78dcfee913b89"
};

const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
    return app;
}