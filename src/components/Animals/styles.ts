import { Box } from "@mui/material";
import styled from "styled-components";

export const ContainerCustom = styled('div')`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    max-width: 800px;
    max-height: 800px;

    @media(max-width: 600px) {
        max-height: 650px;
    }
    @media(max-width: 380px) {
        max-height: 470px;
    }
    @media(max-width: 800px) {
        max-height: 650px;
    }
`
export const BoxCard = styled(Box)`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 15px;
    margin: 10px;
`
