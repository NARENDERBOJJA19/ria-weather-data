import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';


var firebaseConfig = {
  apiKey: "AIzaSyA7Lp31kKB6hdxDi3BtLlOL16pZy7waXQc",
  authDomain: "weatherappyt.firebaseapp.com",
  projectId: "weatherappyt",
  storageBucket: "weatherappyt.appspot.com",
  messagingSenderId: "288142136182",
  appId: "1:288142136182:web:f82af1d83a340af0b36057",
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);


export { db, ref, onValue };
