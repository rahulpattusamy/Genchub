
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBW87O6pXHuWDxGS-owZCGpt8_lU9uwd60",
  authDomain: "genzhub-cb2ce.firebaseapp.com",
  projectId: "genzhub-cb2ce",
  storageBucket: "genzhub-cb2ce.firebasestorage.app",
  messagingSenderId: "160200876370",
  appId: "1:160200876370:web:f108fb49ce435c1e6f1a8b",
  measurementId: "G-JVQJHJTTQY"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default auth