
import { ArrowBackRounded } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { BibliographyText, BibliographyTitle, ContainerCustom, ContainerHeader, ContainerText, SubTitle } from './styles'
import BibliographyIcon from '../../assets/bibliography.png'
import { useContext } from 'react'
import { AnimalContext, MedicineContext } from '../../App'

const Bibliography: React.FC = () => {
    const navigate = useNavigate()

    const { animal } = useContext(AnimalContext)
    const { medicine } = useContext(MedicineContext)

    return (
        <ContainerCustom>
            <ContainerHeader>
                <ArrowBackRounded style={{ transform: 'scale(1.5)', cursor: 'pointer' }} onClick={() => navigate(`/${animal?.name}/${medicine?.name}`)} />
                <BibliographyTitle>
                    <img src={BibliographyIcon} width={22} height={22} style={{ position: 'absolute', left: '-22px' }} alt="Bibliography" />
                    Referências Bibliográficas
                </BibliographyTitle>
                <div style={{ height: '25px', width: '25px' }} />
            </ContainerHeader>
            <SubTitle>{medicine?.name}</SubTitle>
            <ContainerText>
                <BibliographyText>
                    {medicine?.bibliographic_references}
                </BibliographyText>
            </ContainerText>
        </ContainerCustom >

    )
}

export default Bibliography




