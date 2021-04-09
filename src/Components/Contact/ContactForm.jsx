import React from 'react';
import { Field, ErrorMessage } from "formik";

import { FORM_DATA } from './ContactData';
import { FormItem, FormLabel } from '../../styles/Contact';


export const ContactForm = ({ values }) => {
    const findValue = (name, values) => {
        switch (name) {
            case 'name':
                return values.username;
            case 'surname':
                return values.surname;
            case 'message':
                return values.message;
            default:
                return null;
        }
    }

    return (
        <>
            {FORM_DATA.map(({ id, name, component, autoFocus, autoComplete, type, title, placeholder }) =>
                <FormItem key={id}>
                    <FormLabel htmlFor={name}>
                        {title}
                    </FormLabel>
                    <Field
                        component={component}
                        name={name}
                        type={type}
                        autoFocus={autoFocus}
                        autoComplete={autoComplete}
                        value={findValue(name, values)}
                        placeholder={placeholder}
                    />
                    <ErrorMessage component="span" name={name} />
                </FormItem>
            )}
        </>
    )
}
