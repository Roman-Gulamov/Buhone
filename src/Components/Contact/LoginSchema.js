import * as Yup from "yup";


export const LoginSchema = Yup.object().shape({
    username: Yup.string()
        .matches(/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u, "Please enter your real name")
        .required("Please enter your name"),
    email: Yup.string()
        .matches(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/, "Please enter a valid email address")
        .required("Please enter your email"),
    message: Yup.string()
        .min(5, "Please enter a message more than 5 letters")
        .required("Please enter your message")
});