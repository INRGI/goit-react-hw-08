import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
    color: white;
    text-align: center;
    padding: 13px 16px;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    transition: background-color ease-in-out 0.2s;
    &:hover {
        background-color: #111;
    }

  &.active {
    background-color: #8ecae6;
    color: #0D1B1E;
  }
`;

export const LogoContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left:50px;
`;

export const Logo = styled.p`
    margin-left: 5px;
    margin-right:30px;
    margin: 0 30px 0 5px;
    color: white;
    font-size: 28px;
    font-weight: bold;
    letter-spacing: 0.02em;
`;