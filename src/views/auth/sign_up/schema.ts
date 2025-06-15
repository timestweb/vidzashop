// schema.ts
import * as yup from "yup";

export const signUpSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  name: yup.string().required("Full name is required"),
  phone_number: yup.string().required("Phone number is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-z]/, "Must include lowercase letter")
    .matches(/[A-Z]/, "Must include uppercase letter")
    .matches(/\d/, "Must include a number")
    .matches(/[@$!%*?&#]/, "Must include a special character")
    .required("Password is required"),
  news: yup.boolean().notRequired().default(false),
  acceptTerms: yup
    .boolean()
    .oneOf([true], "You must accept the terms")
    .required(),
});

export type SignUpFormType = yup.InferType<typeof signUpSchema>;
