import * as Yup from "yup";

export const signInValidation = Yup.object({
  email: Yup.string().email("Please enter correct email address"),
  password: Yup.string().required("Please enter correct password"),
});
