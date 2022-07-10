import { CardContent, CardMedia, Typography } from '@mui/material'
import { CardAnimals } from './styles'
import rat from '../../assets/rat.svg'
import { useNavigate } from 'react-router-dom'
interface Card {
    id: number
    name: string
}

interface Props {
    card: Card
}

const CardAnimal: React.FC<Props> = ({ card }) => {
    const navigate = useNavigate()

    return (
        <CardAnimals onClick={() => navigate(`/medicines/${card.name}`)} >
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




