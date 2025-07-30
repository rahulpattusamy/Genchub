import auth from "../config/firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import useAuthStore from "../store/authstore";
import { googleProvider } from "../config/firebase-config";

export const signUp = async (email: string, password: string) => {
  const { setUser } = useAuthStore.getState();
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);

  //  Set displayName as name from email
  const nameFromEmail = email.split("@")[0];
  if (auth.currentUser) {
    await updateProfile(auth.currentUser, {
      displayName: nameFromEmail,
    });
  }

  // Refetch user after profile update
  setUser({
    ...userCredential.user,
    displayName: nameFromEmail,
  });
};

export const signIn = async (email: string, password: string) => {
  const { setUser } = useAuthStore.getState();
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  setUser(userCredential.user);
};

export const signInWithGoogle = async (navigate: (path: string) => void) => {
  const result = await signInWithPopup(auth, googleProvider);
  const user = result.user;
  useAuthStore.getState().setUser(user);
  navigate("/");
};

export const logOut = async () => {
  const { setUser } = useAuthStore.getState();
  await signOut(auth);
  setUser(null);
};

