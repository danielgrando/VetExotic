import { CardContent, CardMedia, Typography } from '@mui/material'
import { CardAnimals } from './styles'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AnimalContext } from '../../App'
interface IAnimal {
    id: string
    name: string
    icon: string
    created_at: Date
    updated_at: Date
}

interface Props {
    animalProps: IAnimal
}

const CardAnimal: React.FC<Props> = ({ animalProps }) => {
    const navigate = useNavigate()

    const { setAnimal } = useContext(AnimalContext);

    const setAnimalContextAndNavigateToMedicines = () => {
        setAnimal!(animalProps)
        navigate(`/medicines/${animalProps.name}`)
    }

    return (
        <CardAnimals onClick={() => setAnimalContextAndNavigateToMedicines()} >
            <CardContent>
                <CardMedia
                    component="img"
                    image={'data:image/svg+xml;base64,' + animalProps.icon}
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




