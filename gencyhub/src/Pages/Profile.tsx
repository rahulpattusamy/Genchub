import { useNavigate } from "react-router-dom";
import { logOut } from "../Service/auth-service";
import useAuthStore from "../store/authstore";
import toast from "react-hot-toast";

const Profile = () => {
  const user = useAuthStore((s) => s.user);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (err: any) {
      toast.error("Logout failed");
    }
  };

  return (
    <div className="flex justify-center  items-center mt-5">
      <div className="flex flex-col items-center gap-2 h-60 w-50 shadow-2xl rounded-2xl dark:shadow-fuchsia-700 dark:shadow-sm">
        <h1 className=" bg-gray-800 dark:bg-neutral-700 text-white text-4xl h-25 w-25 rounded-full flex items-center font-bold justify-center mt-5">
          {user?.displayName?.charAt(0) || "U"}
        </h1>
        <p className="font-medium text-lg text-gray-500 dark:text-white">
          {user?.displayName || "USER"}
        </p>
        <button className="btn text-lg" onClick={handleLogout}>
          SIGN OUT
        </button>
        <p onClick={()=>navigate('/orders') } className="font-light hover:underline cursor-pointer dark:text-white">Check Your Orders</p>
      </div>

    </div>
  );
};

export default Profile;
