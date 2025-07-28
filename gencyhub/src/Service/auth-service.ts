import auth from "../config/firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import useAuthStore from "../store/authstore";
import { googleProvider } from "../config/firebase-config";


export const signUp = async (email: string, password: string) => {
  const { setUser } = useAuthStore.getState();
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  setUser(userCredential.user);
};

export const signIn = async (email: string, password: string) => {
  const { setUser } = useAuthStore.getState();
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  setUser(userCredential.user);
};

export const signInWithGoogle = async () => {
  const { setUser } = useAuthStore.getState();
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    setUser(user);
  
};




export const logOut = async () => {
  const { setUser } = useAuthStore.getState();
  await signOut(auth);
  setUser(null);
};





