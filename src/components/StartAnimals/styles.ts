
import styled from "styled-components";

export const BoxMain = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    position: relative;
`
export const TextSection = styled('h2')` 
    padding: 0.5rem;
    font-weight: 400;
    position: absolute;
    top: 15%;
    left: 5%;

    @media(max-width: 600px) {
        top: 6%;
        left: 5%;
    }
    @media(max-width: 400) {
        top: 10%;
        left: 5%;
    }
    @media(max-width: 800px) {
        top: 10%;
        left: 5%;
    }
    @media(max-width: 1200px) {
        top: 10%;
        left: 5%;
    }
`
