import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    height: 51px;
    transition: background-color ease-in-out 0.2s;
    &:hover {
        background-color: #111;
    }

  &.active {
    background-color: #8ecae6;
    color: #0D1B1E;
  }
`;

export const Container = styled.div`
  padding-right: 40px;
`;

