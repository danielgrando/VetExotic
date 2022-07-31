import { FarmacologyText } from './styles'
import { useContext } from 'react'
import { MedicineContext } from '../../utils/MedicineContext'

const Farmacology: React.FC = () => {

    const { medicine } = useContext(MedicineContext)

    const pharmacology = medicine?.pharmacology.split('/')
    return (
        <>
            {pharmacology?.map((text, index) =>
                <FarmacologyText key={index}>
                    {text}
                </FarmacologyText>)}
        </>
    )
}

export default Farmacology




