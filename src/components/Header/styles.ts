import { Toolbar } from '@mui/material'
import styled from "styled-components";

export const ContainerSwitch = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const ToolBarCustom = styled(Toolbar)`
    background: ${props => props.theme.colors.primary};
`

export const TextHeader = styled.h2`
    letter-spacing: 3px;
    font-weight: 400 !important;
    font-size: 2em;
    cursor: pointer;
    color: ${props => props.theme.colors.textTitle}
` 