import styled from 'styled-components';
import { Link } from 'react-router-dom';


interface buttonProps {
    primary?: boolean;
    bigSize?: boolean;
}

export const Button = styled(Link)<buttonProps>`
background: ${({ primary }) => (primary ? '#000d1a': 'CD853F')};
white-space: nowrap;
outline: none;
min-width: 100px;
max-width: 200px;
cursor: pointer;
text-decoration: none;
transition: 0.3s;
display: flex;
justify-content: center;
align-items: center;
font-size: 25px;
padding: ${({ bigSize }) => (bigSize ? '16px 40px': '14px 24px')};
color: ${({ primary }) => (primary ? '#fff': '#000d1a')};
font-size: ${({ bigSize }) => (bigSize ? '25px': '20px')};
&:hover {
transform: translateY(-2px);
}
`
