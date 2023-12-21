import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAjBbk9HPtzRzZL6H15MUSphY3P_g3X6ro",
  authDomain: "taskmanagement-db8e8.firebaseapp.com",
  projectId: "taskmanagement-db8e8",
  storageBucket: "taskmanagement-db8e8.appspot.com",
  messagingSenderId: "811652159713",
  appId: "1:811652159713:web:b430a95524b407402bbfa0"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);