
import { ArrowBackRounded } from '@mui/icons-material'
import { useNavigate, useParams } from 'react-router-dom'
import { BibliographyTitle, ContainerCustom, ContainerHeader, SubTitle } from './styles'
import BibliographyIcon from '../../assets/bibliography.png'

const Bibliography: React.FC = () => {
    const navigate = useNavigate()
    const { animal, medicine } = useParams()

    return (
        <ContainerCustom>
            <ContainerHeader>
                <ArrowBackRounded style={{ transform: 'scale(1.5)', cursor: 'pointer' }} onClick={() => navigate(`/${animal}/${medicine}`)} />
                <BibliographyTitle>
                    <img src={BibliographyIcon} width={22} height={22} style={{ position: 'absolute', left: '-22px' }} alt="Bibliography" />
                    Referências Bibliográficas
                </BibliographyTitle>
                <div style={{ height: '25px', width: '25px' }} />
            </ContainerHeader>
            <SubTitle>{medicine}</SubTitle>
        </ContainerCustom >

    )
}

export default Bibliography




