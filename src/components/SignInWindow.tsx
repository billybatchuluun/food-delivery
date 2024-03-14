import React, { useState } from "react";
import { EyeOff } from "@/svg/EyeOff";
import { useFormik, validateYupSchema } from "formik";
import { signInValidation } from "@/pages/signInValidation";
import { useRouter } from "next/router";

export const SignInWindow = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signInValidation,
    onSubmit: () => {},
  });

  const signInUser = async () => {
    try {
      const user = {
        email: values.email,
        password: values.password,
      };
      console.log(user);

      const res = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      console.log(res);
      if (res.status === 200) {
        return router.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col  items-center p-9 gap-[48px]">
      <div className="flex flex-col items-center justify-center gap-[48px]">
        <div>
          <p className="text-3xl">Нэвтрэх</p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label>И-мэйл </label>

            <input
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-[385px] h-10 bg-stone-100 rounded-sm pl-5 "
              type="search"
              placeholder="И-мэйл хаягаа оруулна уу"
            ></input>
          </div>
          <div className="flex flex-col gap-2">
            <label>Нууц үг </label>
            <div className="flex w-[385px] h-10 bg-stone-100 rounded-sm px-5 justify-between items-center">
              <input
                id="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-[385px] h-10 bg-stone-100"
                type="search"
                placeholder="Нууц үг"
              ></input>
              <EyeOff />
            </div>

            <label className="flex justify-end">Нууц үг сэргээх</label>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-9">
        <div className="">
          <button
            onClick={signInUser}
            className="flex w-[385px] h-10 bg-stone-100 rounded-sm justify-center items-center"
          >
            Нэвтрэх
          </button>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-sm ">Эсвэл</p>
        </div>
        <div className="">
          <a href="./signup">
            <button className="flex w-[385px] h-10 rounded-sm border-green-400 border justify-center items-center">
              Бүртгүүлэх
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
