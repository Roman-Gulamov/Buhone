import styled from 'styled-components';


export const ContactCover = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 42em;
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
    width: 50%;
    color: #fff;
    font-weight: 300;

    @media screen and (max-width: 1024px) {
        width: 100%;
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

