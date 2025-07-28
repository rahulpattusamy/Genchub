import { Toaster } from "react-hot-toast";
import AuthForm from "../components/Log";

const Auth = () => {
  return (
    <div>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            backgroundColor: "white",
            color: "#1f2937",
            fontWeight: "500",
            padding: "1px",
            marginTop: "4rem",
          },
          iconTheme: {
            primary: "#166534",
            secondary: "#ffffff",
          },
          error: {
            iconTheme: {
              primary: "#b91c1c",
              secondary: "#ffffff",
            },
          },
        }}
      />
      <AuthForm />
    </div>
  );
};

export default Auth;
