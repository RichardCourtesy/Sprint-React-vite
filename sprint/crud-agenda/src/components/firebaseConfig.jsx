//Imports das bibliotecas Firebase
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

//Configuração do Firebase para que o Firebase identifique e se conecte ao seu aplicativo específico.
const firebaseConfig = {
    apiKey: "AIzaSyD5HDWwOnRCkPej7h9PHCuHLgPWbIEK2_M",
    authDomain: "sprint-react-vite.firebaseapp.com",
    projectId: "sprint-react-vite",
    storageBucket: "sprint-react-vite.appspot.com",
    messagingSenderId: "559597099799",
    appId: "1:559597099799:web:c07216265d2e3fb1e83552"
};
//permite acessa a funçoes do firebase presentes no projeto
const app = initializeApp(firebaseConfig);
//chama o firestore
const db = getFirestore(app);
//chama o authentication
const auth = getAuth(app);
//chama o storage
const storage = getStorage(app);


export { db, auth, storage };

//http://localhost:5173/action