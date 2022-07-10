import styled from 'styled-components'
import { Box } from '@mui/material'

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
export const FarmacologyTitle = styled.h2`
    font-size: 1.3em;
    position: relative;
`
export const SubTitle = styled.span`
    margin-top: -2em; 
`