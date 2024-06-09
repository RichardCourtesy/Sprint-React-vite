import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD5HDWwOnRCkPej7h9PHCuHLgPWbIEK2_M",
    authDomain: "sprint-react-vite.firebaseapp.com",
    projectId: "sprint-react-vite",
    storageBucket: "sprint-react-vite.appspot.com",
    messagingSenderId: "559597099799",
    appId: "1:559597099799:web:c07216265d2e3fb1e83552"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };