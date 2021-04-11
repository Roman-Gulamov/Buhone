import React from 'react';
import { Field } from "formik";

import { findValue } from './findValue';
import { FORM_DATA } from './ContactData';
import { FormItem, FormLabel, MyErrorMessage } from '../../styles/Contact';



export const FormMap = ({ values, loading }) => {
    return (
        <>
            {FORM_DATA.map(({ id, name, component, autoFocus, autoComplete, type, title, placeholder }) =>
                <FormItem 
                    key={id} 
                    input={autoComplete} 
                    first={autoFocus} 
                >
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
                        readOnly={loading ? true : false}
                    />
                    <MyErrorMessage component="span" name={name} text={+true}/>
                </FormItem>
            )}
        </>
    )
}
