import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
    name: Yup.string()
        .matches(/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u, "Введите ваше настоящее имя")
        .required("Введите ваше имя"),
    surname: Yup.string()
        .matches(/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u, "Введите вашу настояющую фамилию")
        .required("Введите вашу фамилию"),
    message: Yup.string()
        .min(5, "Пожалуйста, введите сообщение более 5 букв")
        .required("Введите сообщение")
});