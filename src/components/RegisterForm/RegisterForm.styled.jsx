import styled from '@emotion/styled';
import { Field, Form } from 'formik';

export const Container = styled(Form)`
    height: 400px;
    width: 350px;
    background-color: rgba(255,255,255,0.13);
    position: absolute;
    transform: translate(-50%,-50%);
    top: 50%;
    left: 50%;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255,255,255,0.1);
    box-shadow: 0 0 20px rgba(8,7,16,0.6);
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`;

export const Input = styled(Field)`
    display: block;
    height: 50px;
    width: 276px;
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

export const Button = styled.button`
    margin-top: 20px;
    width: 300px;
    background-color: #8ecae6;
    color: white;
    padding: 15px 0;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;

    &:hover{
        transform: translateY(-1px);
        box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    }
`;

export const Label = styled.label`
    display: block;
    margin-top: 30px;
    font-size: 16px;
    font-weight: 500;
`;

export const Title = styled.h3`
    font-size: 32px;
    font-weight: 700;
    line-height: 42px;
    text-align: center;
    margin: 0;
    margin-bottom: 20px;
`;