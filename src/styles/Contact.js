import styled, { css } from 'styled-components';
import { ErrorMessage } from "formik";


export const ContactCover = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 47em;
    margin: auto;
    object-fit: cover;
    z-index: -1;
`   

export const ContactWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media screen and (max-width: 1024px) {
        justify-content: center;
    }
` 

export const ContactDescription = styled.div`
    width: 45%;
    color: #fff;
    font-weight: 300;

    @media screen and (max-width: 1024px) {
        width: 100%;
        margin-bottom: 2em;
    }
` 

export const DescriptionText = styled.p`
    font-size: 1.1em;
    margin: 2em 0 3em 0;

    @media screen and (max-width: 1024px) {
        text-align: center;
    }

    @media screen and (max-width: 361px) {
        margin-bottom: 1em;
    }
` 

export const DescriptionConnections = styled.div`
    display: flex;

    @media screen and (max-width: 1024px) {
        justify-content: center;
    }

    @media screen and (max-width: 361px) {
        flex-wrap: wrap;
    }
` 

export const ConnectionsItem = styled.div`
    display: inline-flex;
    margin-right: ${props => props.marginRight ? '2em' : '0'};

    @media screen and (max-width: 361px) {
        margin: 0.5em;
    }

    & svg {
        margin: auto 0;
    }
` 

export const Text = styled.span`
    font-size: 1.2em;
    padding-left: 0.5em;

    @media screen and (max-width: 621px) {
        font-size: 0.9em;
    }
` 

export const ContactForm = styled.div`
    width: 50%;

    & form {
        width: 100%;
        
        @media screen and (max-width: 1024px) {
            width: 100%;
            margin-bottom: 1em;
        }
    }   

    @media screen and (max-width: 1024px) {
        width: 100%;
    }
` 

export const FormItem = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: ${props => props.input ? '0' : '3em'};

    & input, textarea {
        border: none;
        border-bottom: 1px solid #fff;
        background-color: transparent;
        padding-bottom: 0.5em;
        box-shadow: 0 0 0 1000px var(--blue-050) inset;
        transition: background-color 0s 50000s;
        -webkit-text-fill-color: rgba(255, 255, 255, 0.9);
        caret-color: #fff;

        &::placeholder {
            font-weight: 300;
        }
    }

    & textarea {
        height: 4.5em;
        resize: none;
    }

    ${props => props.first && css`
        padding-right: 1em;

        @media screen and (max-width: 1024px) {
            padding-right: 0;
        }
    `}

    ${props => props.input && css`
        display: inline-flex;
        width: 50%;
        margin-bottom: 2em;

        @media screen and (max-width: 1024px) {
            display: flex;
            width: 100%;
        }
    `}
` 

export const FormLabel = styled.label`
    color: #fff;
    font-size: 1.2em;
    margin-bottom: 0.3em;

    @media screen and (max-width: 1024px) {
        text-align: center;
    }
` 

export const FormButton = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const MyErrorMessage = styled(ErrorMessage)`
    position: absolute;
    top: 100%;
    left: 0;
    color: red;
`

export const Button = styled.button`
    font-size: 1.1em;
    padding: 0.9em 1.8em;
    background-color: ${props => props.theme.colors.brandColor};
    border: none;
    color: #fff;
    transition: all .3s ease;
    cursor: pointer;

    &:active {
        transform: scale(0.96);
    }
` 

