import * as Yup from "yup";

export const Schema = Yup.object().shape({
    name: Yup.string()
        .matches(/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u, "Введите ваше имя")
        .required("Введите ваше имя"),
    surname: Yup.string()
        .matches(/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u, "Введите вашу фамилию")
        .required("Введите вашу фамилию"),
    message: Yup.string()
        .min(5, "Введите сообщение более 5 букв")
        .required("Введите сообщение более 5 букв")
});