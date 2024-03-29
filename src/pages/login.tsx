import React from "react";
import { TopBar } from "@/components/TopBar";
import { SignInWindow } from "@/components/SignInWindow";
import { Footer } from "@/components/Footer";

const Login = () => {
  return (
    <>
      <div>
        <div>
          <TopBar />
          <SignInWindow />
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Login;
