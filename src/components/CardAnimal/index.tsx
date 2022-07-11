import { CardContent, CardMedia, Typography } from '@mui/material'
import { CardAnimals } from './styles'
import { useNavigate } from 'react-router-dom'
interface IAnimal {
    id: string
    name: string
    icon: string
    created_at: Date
    updated_at: Date
}

interface Props {
    animal: IAnimal
}
const CardAnimal: React.FC<Props> = ({ animal }) => {
    const navigate = useNavigate()

    return (
        <CardAnimals onClick={() => navigate(`/medicines/${animal.name}`)} >
            <CardContent>
                <CardMedia
                    component="img"
                    image={'data:image/svg+xml;base64,' + animal.icon}
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




