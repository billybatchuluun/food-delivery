import { TopBar } from "@/components/TopBar";
import { RegisterWindow } from "@/components/RegisterWindow";
import { Footer } from "@/components/Footer";

const Signup = () => {
  return (
    <>
      <div>
        <div>
          <TopBar />
          <RegisterWindow />

          <Footer />
        </div>
      </div>
    </>
  );
};
export default Signup;
