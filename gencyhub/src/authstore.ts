import { create } from "zustand";

type User = {
  id: number;
  username: string;
  token: string;
};

type AuthStore = {
  user: User | null;
  isLoggedIn: boolean;
  login: (user: User) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  user: JSON.parse(localStorage.getItem("user") || "null"),
  isLoggedIn: !!localStorage.getItem("user"),
  login: (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    set({ user, isLoggedIn: true });
  },
  logout: () => {
    localStorage.removeItem("user");
    set({ user: null, isLoggedIn: false });
  },
}));
