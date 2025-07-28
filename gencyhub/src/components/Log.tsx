import { useState } from "react";
import { signIn,signInWithGoogle,signUp  } from "../Service/auth-service";
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
        toast.success("Welcome to Genzhub");
      } else {
        await signUp(email, password);
        toast.success("Account created!");
      }
      navigate("/")
    } catch (err: any) {
      toast.error("Email or Password is wrong");
    }
  };

  const handleGoogleLogin = async () => {
  try {
    await signInWithGoogle();
    toast.success("Signed in with Google!");
    navigate("/");
  } catch (error) {
    toast.error("Google Sign-In failed");
  }
};
  

  return (
<div className="min-h-screen bg-gradient-to-t flex items-center justify-center px-4">
  <div className="bg-white shadow-xl rounded-3xl p-10 w-full max-w-md border border-gray-200">
    <h2 className="text-xl font-normal text-center text-gray-700 mb-6">
      {mode === "login" ? "Welcome to Genzhub" : "Create an Account"}
    </h2>

    {/* Form */}
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
        className="w-full bg-indigo-600 text-white py-2 cursor-pointer rounded-xl hover:bg-indigo-700 transition duration-300 font-semibold text-lg"
      >
        {mode === "login" ? "Sign In" : "Sign Up"}
      </button>
    </form>

    {/* Continue with Google Button */}
    <div className="mt-6">
      <button onClick={()=>handleGoogleLogin}
        type="button"
        className="w-full flex items-center justify-center gap-3 cursor-pointer px-4 py-2 border border-gray-300 rounded-xl hover:bg-gray-100 transition duration-300"
      >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google logo"
          className="w-5 h-5"
        />
        <span className="text-gray-700 font-medium">Continue with Google</span>
      </button>
    </div>

    {/* Mode Switch */}
    <p className="text-center text-sm text-gray-600 mt-6">
      {mode === "login" ? "Don't have an account?" : "Already a member?"}
      <button
        onClick={() => setMode(mode === "login" ? "signup" : "login")}
        className="text-indigo-600 font-medium cursor-pointer hover:underline ml-1"
      >
        {mode === "login" ? "Sign Up" : "Sign In"}
      </button>
    </p>
  </div>
</div>



  );
}

export default AuthForm