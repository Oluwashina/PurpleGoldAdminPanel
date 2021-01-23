import * as Yup from 'yup';

export const loginValidator = Yup.object({
    email: Yup.string().email("Enter a valid email")
    .required("Email is required"),
    password: Yup.string()
    .min(3, "Password cannot be less than 3 characters")
    .required("Password is required"),
});
