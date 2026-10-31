import { initializeApp} from "firebase/app";
import { getFirestore, collection} from "firebase/firestore";
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRcTaFO9TaG3d6SUw-x1wGLn_13a1tEIM",
  authDomain: "nuttylah-b86c9.firebaseapp.com",
  projectId: "nuttylah-b86c9",
  storageBucket: "nuttylah-b86c9.firebasestorage.app",
  messagingSenderId: "1046416148889",
  appId: "1:1046416148889:web:970266b19f8fb3a9baeb08",
  measurementId: "G-6NQV8P93X1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const todosCol = collection(db, 'todos');
export const auth = getAuth(app);
