import { Search } from "@mui/icons-material";
import { Input } from "@mui/material";
import styled from "styled-components";

export const ContainerCustom = styled.div`
    display: flex;
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
    font-size: 1.7em;
`
export const TitleMedicine = styled.h3`
    font-size: 1.4em;
`
export const MedicineName = styled.p`
    color: ${props => props.theme.colors.text};
    font-size: 1.1em;
`

export const ContainerSearch = styled.div`
    margin-top: 3.5vh;
    width: 85%;
`
export const InputMedicine = styled(Input)`
    color: 'white';
`

export const SearchIcon = styled(Search)`
    color: ${props => props.theme.colors.text}
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
    justify-content: space-between;
    width: 100%;
    padding: 10px;
    background-color: ${props => props.theme.colors.backgroundMedicines};
    font-weight: 400;
    border: 1px solid ${props => props.theme.colors.backgroundMedicines};
    border-radius: 3px;
    height: 3.8rem;
    margin: 10px 0px 5px 0px;
    cursor: pointer;
    transition: ease-in-out 0.2s;

    &:hover{
        background-color: ${props => props.theme.colors.backgroundMedicinesHover}
    }
`

