import React from 'react';
import { Field } from "formik";

import { findValue } from './findValue';
import { FORM_DATA } from './ContactData';
import { FormItem, FormLabel, MyErrorMessage } from '../../styles/Contact';



export const FormMap = ({ values, loading }) => {
    return (
        <>
            {FORM_DATA.map(({ id, name, component, autoComplete, type, title, placeholder }) =>
                <FormItem 
                    key={id} 
                    input={autoComplete} 
                    first={name === 'name' ? true : false} 
                >
                    <FormLabel htmlFor={name}>
                        {title}
                    </FormLabel>
                    <Field
                        component={component}
                        name={name}
                        type={type}
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
