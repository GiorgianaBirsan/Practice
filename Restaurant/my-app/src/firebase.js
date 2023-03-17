// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
import { collection } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIoW1D1Jkp2Zfrjep8NhfJlPxhvIHlHUI",
  authDomain: "restaurant-fa988.firebaseapp.com",
  projectId: "restaurant-fa988",
  storageBucket: "restaurant-fa988.appspot.com",
  messagingSenderId: "101698068507",
  appId: "1:101698068507:web:af7985c59c753899d218be",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;

export const database = getFirestore(app);
export const storage = getStorage();

export const collectionUserRef = collection(database, "USERS");
export const collectionRestaurantRef = collection(database, "RESTAURANTS", );

export const currentUser = auth.currentUser;
