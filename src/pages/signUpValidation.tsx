import * as Yup from "yup";

import React from "react";

export const signUpValidation = Yup.object({
  name: Yup.string().min(3).required("Please Enter name"),
  email: Yup.string()
    .email("Please Enter valid email")
    .required("Please enter email"),
  password: Yup.string().min(7).required("Please enter password"),
  repassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password not matched")
    .required("Please enter password"),
});
