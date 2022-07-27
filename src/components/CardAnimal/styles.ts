import styled from 'styled-components'
import { Card } from '@mui/material'

export const CardAnimals = styled(Card)`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 130px;
    min-height: 120px;
    background: ${props => props.theme.colors.textTitle} !important;
    cursor: pointer;
    border-radius: 15px !important;
`