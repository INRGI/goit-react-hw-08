import styled from '@emotion/styled'

export const Container = styled.div`
    display: flex;
    align-items: center;
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
    margin-top: 200px;
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