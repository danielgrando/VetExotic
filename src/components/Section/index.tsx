
import { Box, Card, CardContent, Typography } from '@mui/material'
import React, { useContext } from 'react'
import CardAnimal from '../CardAnimal'
import { BoxCard, ContainerCustom } from './styles'


const Section: React.FC = () => {
    const cards = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
        { id: 10 },
        { id: 11 },
    ]
    return (
        <ContainerCustom>
            {cards.map((card, index) => (
                <BoxCard key={index}>
                    <CardAnimal card={card} />
                </BoxCard>
            ))}
        </ContainerCustom>
    )
}

export default Section