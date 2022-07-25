import styled from "styled-components";
import { ReactComponent as Medicine } from '../../assets/medicine.svg'

export const ContainerCustom = styled.div`
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

export const MedicineTitle = styled.h2`
    font-size: 1.7em;
    position: relative;
`
export const MedicineIcon = styled(Medicine)`
    position: absolute;
    left: -25px;
    top: -2px;
    right: 0px;
`

export const ContainerMedicineDetails = styled.div`
    min-width: 85%;
    min-height: 65%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 3rem;
`
export const ClassificationDescriptionContainer = styled.div`
    height: 30%;
`
export const ClassificationTitle = styled.h3`
    font-size: 1.4em;
    color: ${props => props.theme.colors.text} !important;
`
export const ClassificationText = styled.p`
    font-size: 1.1em;
    margin: 0.3rem 0rem 1rem 0rem;
    color: ${props => props.theme.colors.text} !important;
`
export const DescriptionTitle = styled.h3`
    font-size: 1.4em;
    margin-top: 2rem;
    color: ${props => props.theme.colors.text} !important;
`
export const DescriptionText = styled.p`
    font-size: 1.1em;
    margin: 0.3rem 0rem 1rem 0rem;
    color: ${props => props.theme.colors.text} !important;
`

export const ButtonDosage = styled.button`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    min-width: 10rem;
    height: 3rem;
    border: transparent;
    cursor: pointer;
    box-shadow: 0px 10px 40px -4px rgba(0,0,0,0.1);
    background: linear-gradient(90deg, rgba(133,240,255,0.5) 0%, rgba(133,240,255,0.5) 0%, rgba(0,212,255,0.5) 0%);
    border-radius: 10px;
    margin: 0 auto;
`
export const TextButton = styled.span`
    color: ${props => props.theme.colors.text};
    font-size: 1.2em;
`

export const ButtonFarmacology = styled.button`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 20rem;
    height: 3rem;
    border: 1px solid ${props => props.theme.colors.backgroundButton};
    cursor: pointer;
    border-radius: 5px;
    background-color: ${props => props.theme.colors.backgroundButton};
    margin: 3rem auto 0.5rem auto;
    transition: ease-in-out 0.3s;

    &:hover{
        background-color: ${props => props.theme.colors.backgroundMedicinesHover}
    }
`
export const ButtonBibliography = styled.button`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 20rem;
    height: 3rem;
    border: 1px solid ${props => props.theme.colors.backgroundButton};
    cursor: pointer;
    border-radius: 5px;
    margin: 0 auto;
    background-color: ${props => props.theme.colors.backgroundButton};
    transition: ease-in-out 0.3s;

    &:hover{
        background-color: ${props => props.theme.colors.backgroundMedicinesHover}
    }
`

export const ContainerButtons = styled.div`
    display: flex;
    flex-direction: column;
`
export const SubTitle = styled.p`
    font-size: 1.2em;
    margin-top: -1.3em; 
`