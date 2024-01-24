import * as Yup from "yup";

// Strong Regex password expression
const passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&])(?=.{8,})");


export const signUpSchema = Yup.object({
    username: Yup.string().min(5).required("Please enter a username"),
    name: Yup.string().min(3).required("Please enter your full name"),
    email: Yup.string().email("Please enter a valid email").required("Please enter your email"),
    password: Yup.string().matches(passwordRegex, "Please enter valid password").required("Please enter your password"),
    confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Password do NOT match! ").required("Please confirm your password"),
})