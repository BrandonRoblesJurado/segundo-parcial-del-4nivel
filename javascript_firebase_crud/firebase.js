// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  onSnapshot,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDKpgXtx35wK_I4cYfIBtZNzqm1O2XmxgE",
    authDomain: "fir-javascript-crud-dafe5.firebaseapp.com",
    projectId: "fir-javascript-crud-dafe5",
    storageBucket: "fir-javascript-crud-dafe5.appspot.com",
    messagingSenderId: "337678147025",
    appId: "1:337678147025:web:15c4a9c09fcb9252b854f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export const savetask = (title, description) =>
  addDoc(collection(db, "tasks"), { title, description });

export const getTasks = () => getDocs(collection(db, "tasks"));

export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "tasks"), callback);

export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));

export const getTask = (id) => getDoc(doc(db, "tasks", id));

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, "tasks", id), newFields);
