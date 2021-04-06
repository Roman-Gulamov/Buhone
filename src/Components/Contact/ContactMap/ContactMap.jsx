import React from 'react';

import { Field, ErrorMessage } from "formik";

import { CONTACT_DATA } from './ContactData';
import { findValue } from './findValue';
import { ContactItem, ItemLabel } from '../../../styles/Contact';

export const ContactMap = ({ values }) => {
    return (
        <div>
            {CONTACT_DATA.map(({ name, component, autoFocus, autoComplete, type, title }) =>
                <ContactItem key={name}>

                </ContactItem>
            )}
        </div>
    )
}
