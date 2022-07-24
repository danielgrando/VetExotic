
import { ArrowBackRounded } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { ContainerText, FarmacologyText, FarmacologyTitle, ContainerCustom, ContainerHeader, SubTitle } from './styles'
import FarmacologyIcon from '../../assets/farmacology.png'
import { useContext } from 'react'
import { MedicineContext } from '../../App'
import { AnimalContext } from '../../utils/AnimalContext'

const Farmacology: React.FC = () => {
    const navigate = useNavigate()

    const { animal } = useContext(AnimalContext)
    const { medicine } = useContext(MedicineContext)


    const pharmacology = medicine?.pharmacology.split('/')
    return (
        <ContainerCustom>
            <ContainerHeader>
                <ArrowBackRounded style={{ transform: 'scale(1.5)', cursor: 'pointer' }} onClick={() => navigate(`/${animal?.name}/${medicine?.name}`)} />
                <FarmacologyTitle>
                    <img src={FarmacologyIcon} width={22} height={22} style={{ position: 'absolute', left: '-25px', top: '-2px' }} alt="Farmacology" />
                    Farmacologia
                </FarmacologyTitle>
                <div style={{ height: '25px', width: '25px' }} />
            </ContainerHeader>
            <SubTitle>{medicine?.name}</SubTitle>
            <ContainerText>
                {pharmacology?.map((text, index) =>
                    <FarmacologyText key={index}>
                        {text}
                    </FarmacologyText>)}
            </ContainerText>

        </ContainerCustom >
    )
}

export default Farmacology




