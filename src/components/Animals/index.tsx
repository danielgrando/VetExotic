import CardAnimal from '../CardAnimal'
import { BoxCard, ContainerCustom } from './styles'

interface IAnimals {
    id: string
    name: string
    icon: string
    created_at: Date
    updated_at: Date
}

interface Props {
    animals: IAnimals[]
}

const Animals: React.FC<Props> = ({ animals }) => {
    return (
        <ContainerCustom>
            {animals.map((animal) => (
                <BoxCard key={animal.id}>
                    <CardAnimal animalProps={animal} />
                </BoxCard>
            ))}
        </ContainerCustom>
    )
}

export default Animals