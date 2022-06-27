import React, { useContext } from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { CardAnimals } from './styles'
import rat from '../../assets/rat.svg'

interface Card {
    id: number
}

interface Props {
    card: Card
}

const CardAnimal: React.FC<Props> = ({ card }) => {
    return (
        <CardAnimals>
            <CardContent>
                <CardMedia
                    component="img"
                    image={rat}
                    alt="rat"
                />
                <Typography variant="body2">
                    {/* {card.id} */}
                </Typography>
            </CardContent>
        </CardAnimals>
    )
}

export default CardAnimal




