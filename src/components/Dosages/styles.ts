import styled from 'styled-components'
import { ReactComponent as Medicine } from '../../assets/medicine.svg'

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
export const ContainerDosageDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const ContainerDosage = styled.div`
    width: 100%;
`
export const TextNameDosage = styled.h3`
    color: ${props => props.theme.colors.text} !important;
    font-size: 1.3em;
`

export const SubTitle = styled.p`
    font-size: 1.2em;
    margin-top: -1.3em; 
`

export const Title = styled.h3`
    color: ${props => props.theme.colors.text} !important;
`
export const Text = styled.p`
    font-size: 1em;
    margin-top: 0.3rem;
    color: ${props => props.theme.colors.text} !important;
`

export const ContainerItemDetail = styled.div`
    margin: 0.3rem 0rem 1rem 0rem;
`

export const DosageText = styled.p`
    font-size: 2em;
    font-weight: 600;
    margin-top: 0.5rem;
    color: ${props => props.theme.colors.textTitle} !important;
`
