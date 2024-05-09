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
  phoneNumber: Yup.number()
    .required()
    .test("should be exactly ten digits", (phoneNumber) => {
      return phoneNumber.toString().length === 10;
    }),
  email: Yup.string().email().required(),
  password: Yup.string()
    .min(8)
    .max(16)
    .required()
    .test("Should satisfy password pattern", (password) => {
      return passwordPattern.test(password);
    }),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password is not matching!")
    .required(),
});

export const deliverySchema = Yup.object().shape({
  email: Yup.string().email().required(),
  address: Yup.string().required(),
  pincode: Yup.number()
    .required()
    .test("should be exactly six digits", (pincode) => {
      return pincode.toString().length === 6;
    }),
  country: Yup.string().required(),
  phoneNumber: Yup.number()
    .required()
    .test("should be exactly ten digits", (phoneNumber) => {
      return phoneNumber.toString().length === 10;
    }),
});
