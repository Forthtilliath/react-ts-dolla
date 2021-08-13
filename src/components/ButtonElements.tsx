import styled from 'styled-components';
import { Link } from 'react-scroll';

interface Props {
    big?: boolean;
    dark?: boolean;
    fontBig?: boolean;
    // exact?: string;
}

const StyledLink = styled(({ dark, big, fontBig, ...props }) => <Link {...props} />)`
    // Laisser les back quotes sinon y'a une erreur
`;

export const Button = styled(StyledLink)<Props>`
    border-radius: 50px;
    background-color: ${({ dark }) => (dark ? '#01bf71' : '#010606')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: ${({ dark }) => (dark ? '#010606' : '#fff')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.1s ease-in-out;

    &:focus {
        outline: thin dotted;
    }

    &:hover {
        transition: all 0.2s ease-in-out;
        background-color: ${({ dark }) => (dark ? '#fff' : '#01bf71')};
    }
`;
