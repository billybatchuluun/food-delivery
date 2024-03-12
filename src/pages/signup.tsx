import { TopBar } from "@/components/TopBar";
import { RegisterWindow } from "@/components/RegisterWindow";
import { Footer } from "@/components/Footer";
import { useFormik } from "formik";

const Signup = () => {
  // const formik = useFormik({
  //   initialValues:{
  //     name: '',
  //     email: '',

  //   }
  // });
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
