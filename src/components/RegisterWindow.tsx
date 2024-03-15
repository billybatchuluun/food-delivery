import React, { useState } from "react";
import { EyeOff } from "@/svg/EyeOff";
import { useRouter } from "next/router";
import { useFormik, validateYupSchema } from "formik";
import * as Yup from "yup";
import { signUpValidation } from "@/pages/signUpValidation";

export const RegisterWindow = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
    },
    validationSchema: signUpValidation,
    onSubmit: () => {},
  });

  const signUpUser = async () => {
    try {
      const user = {
        name: values.name,
        email: values.email,
        password: values.password,
      };
      console.log(user);
      const res = await fetch("http://localhost:8080/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      if (res.status === 201) {
        return router.push("./login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex flex-col p-9 gap-[48px]">
        <div className="flex flex-col items-center justify-center gap-[48px]">
          <div>
            <p className="text-3xl">Бүртгүүлэх</p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label>Нэр </label>

              <input
                id="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-[385px] h-10 bg-stone-100 rounded-sm pl-5 "
                type="text"
                placeholder="Нэрээ оруулна уу"
              />
              {errors.name && (
                <p className="text-red-500 text-[12px]">{errors.name}</p>
              )}
            </div>
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
              />
              {errors.email && (
                <p className="text-red-500 text-[12px]">{errors.email}</p>
              )}
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
                />
                <EyeOff />
                {errors.password && (
                  <p className="text-red-500 text-[12px]">{errors.password}</p>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label>Нууц үг </label>
              <div className="flex w-[385px] h-10 bg-stone-100 rounded-sm px-5 justify-between items-center">
                <input
                  id="rePassword"
                  value={values.rePassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-[385px] h-10 bg-stone-100"
                  type="search"
                  placeholder="Нууц үг давтах"
                />
                <EyeOff />
                {errors.rePassword && (
                  <p className="text-red-500 text-[12px]">
                    {errors.rePassword}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-9">
          <div className="flex gap-3">
            <input type="checkbox" />
            <label>Үйлчилгээний нөхцөл зөвшөөрөх</label>
          </div>
          <div className="flex flex-col gap-9">
            <div className="">
              <button
                onClick={signUpUser}
                className="flex w-[385px] h-10 bg-stone-100 rounded-sm justify-center items-center"
              >
                Бүртгүүлэх
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
