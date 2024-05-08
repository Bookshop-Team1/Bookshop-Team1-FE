import * as Yup from "yup";

const passwordPattern = /^(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.*\d)(?=.*[A-Z]).{8,16}$/;

export const loginSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string()
    .min(8)
    .max(16)
    .required()
    .test("Should satisfy required condition", (password) => {
      return passwordPattern.test(password);
    }),
});

export const signupSchema = Yup.object().shape({
  name: Yup.string().required(),
  userName: Yup.string().required(),
  phoneNumber: Yup.string().min(10).max(10).required(),
  email: Yup.string().email().required(),
  password: Yup.string()
    .min(8)
    .max(16)
    .required()
    .test("Should satisfy required condition", (password) => {
      return passwordPattern.test(password);
    }),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password is not matching!")
    .required(),
});
