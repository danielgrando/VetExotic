import CardAnimal from '../CardAnimal'
import { BoxCard, ContainerCustom } from './styles'

const Animals: React.FC = () => {
    const cards = [
        { id: 1, name: 'Roedores' },
        { id: 2, name: 'Coelhos (Oryctolagus cuniculus)' },
        { id: 3, name: 'Hedgehog (Atelerix albiventris)' },
        { id: 4, name: 'Ferret (Mustela putorius furo)' },
        { id: 5, name: 'Sugar glider (Petaurus breviceps)' },
        { id: 6, name: 'Primatas' },
        { id: 7, name: 'Mini pig (Sus domesticus)' },
        { id: 8, name: 'Aves' },
        { id: 9, name: 'Répteis' },
        { id: 10, name: 'Anfíbios' },
        { id: 11, name: 'Peixes' },
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

export default Animals