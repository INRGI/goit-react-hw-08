import styled from '@emotion/styled';
import backgroundImage from '../../images/back.jpg';

export const ContainerBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 380px;
    width: 100%;
    max-width: 900px;
    margin-left: 20px;
    border: 1.5px solid;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 5px;
    overflow-y: auto;
    padding: 20px;
    background-image: url(${backgroundImage});
    background-size: cover;
`;


export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`;

export const Title = styled.h1`
    padding: 0;
    margin: 0;
    font-size: 50px;
    color: white;
    text-shadow: -1px -1px 0 #000,  
                 1px -1px 0 #000,
                 -1px 1px 0 #000,
                 1px 1px 0 #000;
`;