
import { ArrowBackRounded } from '@mui/icons-material'
import { useNavigate, useParams } from 'react-router-dom'
import { FarmacologyTitle, ContainerCustom, ContainerHeader, SubTitle } from './styles'
import FarmacologyIcon from '../../assets/farmacology.png'

const Farmacology: React.FC = () => {
    const navigate = useNavigate()
    const { animal, medicine } = useParams()

    return (
        <ContainerCustom>
            <ContainerHeader>
                <ArrowBackRounded style={{ transform: 'scale(1.5)', cursor: 'pointer' }} onClick={() => navigate(`/${animal}/${medicine}`)} />
                <FarmacologyTitle>
                    <img src={FarmacologyIcon} width={22} height={22} style={{ position: 'absolute', left: '-25px', top: '-2px' }} alt="Farmacology" />
                    Farmacologia
                </FarmacologyTitle>
                <div style={{ height: '25px', width: '25px' }} />
            </ContainerHeader>
            <SubTitle>
                ({medicine})
            </SubTitle>

        </ContainerCustom >
    )
}

export default Farmacology




