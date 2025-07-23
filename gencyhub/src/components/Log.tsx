import { useState } from "react";
import { signIn,signUp, logOut  } from "../Service/auth-service";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const  AuthForm =() => {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (mode === "login") {
        await signIn(email, password);
        toast.success("Welcome back!");
      } else {
        await signUp(email, password);
        toast.success("Account created!");
      }
      navigate("/")
    } catch (err: any) {
      toast.error(err.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br  flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          {mode === "login" ? "Welcome Back 👋" : "Create an Account 🚀"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition duration-300 font-semibold text-lg"
          >
            {mode === "login" ? "Sign In" : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          {mode === "login" ? "Don't have an account?" : "Already a member?"}{" "}
          <button
            onClick={() => setMode(mode === "login" ? "signup" : "login")}
            className="text-indigo-600 font-medium hover:underline ml-1"
          >
            {mode === "login" ? "Sign Up" : "Sign In"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default AuthForm