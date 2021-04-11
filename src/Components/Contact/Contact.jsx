import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Formik, Form } from "formik";
import Axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Cover from '../../assets/images/SaintP.jpg'
import { DESCRIPTION_DATA } from './ContactData';
import { Schema } from './Schema';
import { FormMap } from './FormMap';
import { goHome } from './goHome';

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
    Result,
    Button
} from '../../styles/Contact';


export const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const clearAfter = (resetForm) => {
        resetForm({ 
            values: '' 
        })

        setTimeout(() => {
            setLoading('');
        }, 3000);
    }

    const submitForm = (values, resetForm) => {
        const axios = Axios.create();

        axios.interceptors.request.use(
        (config) => {
            setLoading(true);
            return config; 
        }); // Before send
    

        axios.interceptors.response.use(
        (response) => {
            if (response.status === 200) {
                setLoading(false);
                setSuccess('Успешно отправлено!');
                clearAfter(resetForm);
                goHome();
            }
        }, 
        (error) => {
            if (error) {
                setLoading(false);
                setError('Ошибка отправки. Попробуйте снова');
                clearAfter(resetForm);
                return Promise.reject(error);
            }
        }) // Submission result

        axios.post("https://formspree.io/mzbybkgd", {...values}) // Submitting
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
                                <Form>
                                    <FormMap values={values} loading={loading} />
                                    <FormButton disabled={isSubmitting}>
                                        <Result error={error} success={success}>{error} {success}</Result>
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
