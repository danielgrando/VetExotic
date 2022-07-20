import { Box, Input } from "@mui/material";
import styled from "styled-components";

export const ContainerCustom = styled(Box)`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
`

export const ContainerHeader = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin-top: 5rem;
    justify-content: space-between;
    align-items: center;
    min-width: 85%;
    height: 10%;
`
export const AnimalTitle = styled.h2`
    font-size: 1.3em;
`

export const ContainerSearch = styled.div`
    margin-top: 3.5vh;
    width: 85%;
`

export const InputMedicine = styled(Input)`
 &::placeholder {
    color: white;
  }
`
export const ContainerTitleMedicines = styled.div`
    min-width: 85%;
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;
`
export const ContainerMedicines = styled.div`
    min-width: 85%;
    display: block;
    margin-top: 1rem;
`

export const Medicine = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding-left: 10px;
    background-color: rgba(173, 250, 255, 0.7);
    font-weight: 400;
    border-radius: 3px;
    height: 3.8rem;
    margin: 10px 0px 5px 0px;
    cursor: pointer;
    transition: ease 0.3s;

    &:hover{
        background-color: rgba(173, 250, 255, 0.95);
    }
`