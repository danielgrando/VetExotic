import styled from 'styled-components'
import { Card, CardContent } from '@mui/material'

export const CardAnimals = styled(Card)`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 130px !important;
    min-height: 120px !important;
    background: ${props => props.theme.colors.textTitle} !important;
    cursor: pointer;
    border-radius: 15px !important;
`
export const TextAnimal = styled.p`
    margin-top: 0.5rem;
    font-weight: 400;
    font-size: 1.1em;
`

export const CardContentCustom = styled(CardContent)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`