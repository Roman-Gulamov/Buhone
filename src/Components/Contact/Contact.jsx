import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react'; //!
import { createBrowserHistory } from "history";
import { Helmet } from 'react-helmet';
import { Formik, Form } from "formik";
import Axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Cover from '../../assets/images/SaintP.jpg'
import { DESCRIPTION_DATA } from './ContactData';
import { Schema } from './Schema';
import { FormMap } from './FormMap';

import { Wrapper, Title } from '../../styles/Reusable';
import { Container } from '../../styles/Container';
import {
    ContactCover,
    ContactWrapper,
    ContactDescription,
    DescriptionText,
    DescriptionConnections,
    ConnectionsItem,
    Text,
    ContactForm,
    FormButton,
    Button
} from '../../styles/Contact';
// const handleOnSubmit = (values, actions) => {
//         axios({
//           method: "POST",
//           url: "http://formspree.io/YOUR_FORM_ID",
//           data: values
//         })
//           .then(response => {
//             actions.setSubmitting(false);
//             actions.resetForm();
//             handleServerResponse(true, "Thanks!");
//           })
//           .catch(error => {
//             actions.setSubmitting(false);
//             handleServerResponse(false, error.response.data.error);
//           });
//       }; //!

export const Contact = () => {
    const [state, handleSubmit] = useForm("mzbybkgd");
    const [loading, setLoading] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const goHome = () => {
        const history = createBrowserHistory();

        setTimeout(() => {
            history.push('/Buhone/#/contact');
            history.go(0);

            window.location.reload(); // for mobile phone
        }, 2000);
    }

    const clearAfter = (resetForm) => {
        resetForm({ 
            values: '' 
        })

        setTimeout(() => {
            setLoading('');
            setSuccess('');
            setError('');
        }, 2000);
    }

    const submitForm = (values, resetForm) => {
        const axios = Axios.create();

        axios.interceptors.request.use(
        (config) => {
            setLoading('loading');
            return config; 
        }); // Before send
    

        axios.interceptors.response.use(
        (response) => {
            if (response.status === 200) {
                setLoading();
                setSuccess('success');
                clearAfter(resetForm);
                goHome();
            }
        }, 
        (error) => {
            if (error) {
                setLoading();
                setError('error');
                clearAfter(resetForm)
                return Promise.reject(error);
            }
        }) // Submission result

        axios.post("https://formspree.io/xbjpredk", {...values}) // Submitting
    }

    return (
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>BuhOne | Контакты</title>
            <meta name="description" content="Contact" />
            <link rel="canonical" href="https://roman-gulamov.github.io/Buhone/#/contact" />
        </Helmet>
        <Wrapper as='main' contact>
            <ContactCover src={Cover} alt='Cover' />
            <Container>
                <ContactWrapper>
                    <ContactDescription>
                        <Title contact>Связь с нами</Title>
                        <DescriptionText>
                            У вас остались вопросы? Напишите нам - мы ответим в ближайшее время!
                        </DescriptionText>
                        <DescriptionConnections>
                            {DESCRIPTION_DATA.map(({ id, icon, text, marginRight }) =>
                                <ConnectionsItem key={id} marginRight={marginRight}>
                                    <FontAwesomeIcon icon={icon} size='lg' />
                                    <Text>{text}</Text>
                                </ConnectionsItem>
                            )}
                        </DescriptionConnections>
                    </ContactDescription>
                    <ContactForm>
                        <Formik
                            initialValues={{ name: '', surname: '', message: '' }}
                            validationSchema={Schema}
                            onSubmit={(values, {resetForm}) => submitForm(values, resetForm)}
                        >
                            {({ isSubmitting, values }) => (
                                <Form action="https://formspree.io/f/mzbybkgd" method="POST">
                                    <FormMap values={values} />
                                    <FormButton disabled={isSubmitting}>
                                        <Button type='submit' disabled={isSubmitting}>Отправить сообщение</Button>
                                    </FormButton>
                                </Form>
                            )}
                        </Formik>
                    </ContactForm>
                </ContactWrapper>
            </Container>
        </Wrapper>
        </>
    )
}
