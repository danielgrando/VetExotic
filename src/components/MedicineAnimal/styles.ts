import { Box } from "@mui/material"
import styled from "styled-components";
import { ReactComponent as Medicine } from '../../assets/medicine.svg'

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

export const MedicineTitle = styled.h2`
    font-size: 1.3em;
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
    color: ${props => props.theme.colors.text} !important;
`
export const ClassificationText = styled.p`
    font-size: 1em;
    margin: 0.3rem 0rem 1rem 0rem;
    color: ${props => props.theme.colors.text} !important;
`
export const DescriptionTitle = styled.h3`
    color: ${props => props.theme.colors.text} !important;
`
export const DescriptionText = styled.p`
    font-size: 1em;
    margin: 0.3rem 0rem 1rem 0rem;
    color: ${props => props.theme.colors.text} !important;
`

export const ButtonDosage = styled.button`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    min-width: 10rem;
    height: 2.5rem;
    border: transparent;
    cursor: pointer;
    background: linear-gradient(90.55deg, #85F0FF 0.43%, rgba(133, 240, 255, 0.3) 93.33%);
    border-radius: 12px;
    margin: 0 auto;
`
export const TextButton = styled.span`
    font-size: 1.2em;
    font-weight: 400;
`

export const ButtonFarmacology = styled.button`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 18rem;
    height: 2.5rem;
    border: transparent;
    cursor: pointer;
    border-radius: 5px;
    background: rgba(243, 243, 243, 0.5);
    margin: 3rem auto 0.5rem auto;
`
export const ButtonBibliography = styled.button`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 18rem;
    height: 2.5rem;
    border: transparent;
    cursor: pointer;
    border-radius: 5px;
    margin: 0 auto;
    background: rgba(243, 243, 243, 0.5);
`

export const ContainerButtons = styled.div`
    display: flex;
    flex-direction: column;
`
export const SubTitle = styled.span`
    margin-top: -2em; 
`