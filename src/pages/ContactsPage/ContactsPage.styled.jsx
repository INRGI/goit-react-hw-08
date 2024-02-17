import styled from '@emotion/styled'

export const Container = styled.div`
    display: flex;
    margin-top: 30px;
    gap: 30px;
`;

export const EmptyTitle = styled.h2`
    color: black;
    font-size: 2rem;
    animation: typing 2s steps(22), blink .5s step-end infinite alternate;
    white-space: nowrap;
    width:346px;
    overflow: hidden;
    border-right: 3px solid;
    font-family: monospace;
    font-size: 2em;
    margin-top:25%;

    @keyframes typing {
    from {
        width: 0
    }
    }
        
    @keyframes blink {
    50% {
        border-color: transparent
    }
    }
`;

export const ContactsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    height: 380px;
    width: 100%;
    max-width: 700px;
    margin-left: 20px;
    border: 1.5px solid;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 5px;
    padding-top:20px;
    overflow-y: auto;
`;