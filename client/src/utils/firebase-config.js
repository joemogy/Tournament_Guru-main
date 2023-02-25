import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
apiKey: "AIzaSyAHv_ZLtRmyJOCQuUfEOfb7s_R4dI5CIWw",
authDomain: "tournamentauth.firebaseapp.com",
projectId: "tournamentauth",
storageBucket: "tournamentauth.appspot.com",
messagingSenderId: "353264466720",
appId: "1:353264466720:web:8177ac5ff3f4e96b70b545",
measurementId: "G-3JXTWVB7NS"
};
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
