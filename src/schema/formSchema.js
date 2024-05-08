import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).max(16).required(),
});

export const signupSchema = Yup.object().shape({
  name: Yup.string().required(),
  userName: Yup.string().required(),
  phoneNumber: Yup.string().min(10).max(10).required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(8).max(16).required(),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "")
    .required(),
});
