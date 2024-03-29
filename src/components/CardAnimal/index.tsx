import { CardAnimals, TextAnimal, CardContentCustom } from './styles'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AnimalContext } from '../../utils/animalGeneralContext'
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
        localStorage.setItem('animal', JSON.stringify(animalProps))
        setAnimal!(animalProps)
        navigate(`/medicines/${animalProps.name}`)
    }

    return (
        <CardAnimals onClick={() => setAnimalContextAndNavigateToMedicines()} >
            <CardContentCustom>
                <img
                    src={'data:image/svg+xml;base64,' + animalProps.icon}
                    alt={animalProps.name}
                />
                <TextAnimal>
                    {animalProps.name}
                </TextAnimal>
            </CardContentCustom>
        </CardAnimals>
    )
}

export default CardAnimal




