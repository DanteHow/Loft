// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { browserLocalPersistence, getAuth, setPersistence } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFeIWIPZZdysUk-3sslEzbBEQM8J9slAc",
  authDomain: "crm-project-b2729.firebaseapp.com",
  projectId: "crm-project-b2729",
  storageBucket: "crm-project-b2729.appspot.com",
  messagingSenderId: "1077565667720",
  appId: "1:1077565667720:web:837e8bdc745b62835a223d"
}

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)
export const storage = getStorage(firebaseApp)
export const auth = getAuth(firebaseApp)
setPersistence(auth, browserLocalPersistence)

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(firebaseApp)