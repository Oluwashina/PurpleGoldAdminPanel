import * as Yup from 'yup';

export const loginValidator = Yup.object({
    email: Yup.string().required("A valid email is required"),
    password: Yup.string()
    .min(6, "Password cannot be less than 6 characters")
    .required("Password is required"),
});
