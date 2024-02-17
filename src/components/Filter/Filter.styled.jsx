import styled from "@emotion/styled";

export const Input = styled.input`
    display: block;
    height: 50px;
    width: 90%;
    background-color: rgba(255,255,255,0.07);
    border-radius: 3px;
    padding: 0 10px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 300;
    &::placeholder{
        color: black;
    }
    &:hover{
        transform: translateY(-1px);
        box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    }
`;
