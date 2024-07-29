import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0gPYxCI9RrzMWFfojySdEbMeiUe-uek0",
  authDomain: "temp-d19a5.firebaseapp.com",
  projectId: "temp-d19a5",
  storageBucket: "temp-d19a5.appspot.com",
  messagingSenderId: "675237018365",
  appId: "1:675237018365:web:b3482cc796027169219c94",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
