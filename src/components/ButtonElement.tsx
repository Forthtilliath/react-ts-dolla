import styled from 'styled-components';
import { Link } from 'react-scroll';

interface Props {
    primary?: boolean;
    big?: boolean;
    dark?: boolean;
    fontBig?: boolean;
}

// export const Button = styled(Link)<{primary:boolean,big:boolean,dark:boolean,fontBig:boolean}>`
export const Button = styled(Link)<Props>`
    border-radius: 50px;
    background-color: ${({ primary }) => (primary ? '#01bf71' : '#010606')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: ${({ dark }) => (dark ? '#010606' : '#fff')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: thin dotted;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.1s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background-color: ${({ primary }) => (primary ? '#fff' : '#01bf71')};
    }
`;
