import React from "react";
import { TopBar } from "@/components/TopBar";
import { ForgotPasswordWindow } from "@/components/ForgotPasswordWindow";
import { Footer } from "@/components/Footer";

const Forgotpass = () => {
  return (
    <>
      <div>
        <div>
          <TopBar />
          <ForgotPasswordWindow />
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Forgotpass;
