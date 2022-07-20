import { useNavigate } from "react-router-dom";
import { ContainerCustom, ContainerHeader } from "../Medicines/styles"
import Dose from '../../assets/dose.png'
import Farmacology from '../../assets/farmacology.png'
import Bibliography from '../../assets/bibliography.png'
import { ArrowBackRounded } from "@mui/icons-material";
import {
    ButtonBibliography, ButtonDosage, ButtonFarmacology, ClassificationDescriptionContainer,
    ContainerButtons, ContainerMedicineDetails, MedicineTitle, TextButton,
    MedicineIcon, SubTitle, ClassificationTitle, ClassificationText, DescriptionTitle, DescriptionText
} from "./styles";
import { AnimalContext, MedicineContext } from "../../App";
import { useContext } from "react";

const MedicineAnimal: React.FC = () => {
    const navigate = useNavigate()

    const { animal } = useContext(AnimalContext)
    const { medicine } = useContext(MedicineContext)

    return (
        <ContainerCustom>
            <ContainerHeader>
                <ArrowBackRounded style={{ transform: 'scale(1.5)', cursor: 'pointer' }} onClick={() => navigate(`/medicines/${animal?.name}`)} />
                <MedicineTitle>
                    <MedicineIcon width={22} height={22} />
                    {medicine?.name}
                </MedicineTitle>
                <div style={{ height: '25px', width: '25px' }} />
            </ContainerHeader>
            <SubTitle>{animal?.name}</SubTitle>
            <ContainerMedicineDetails>
                <ClassificationDescriptionContainer>
                    <ClassificationTitle>
                        Classificação
                    </ClassificationTitle>
                    <ClassificationText>
                        {medicine?.classification}
                    </ClassificationText>
                    <DescriptionTitle>
                        Descrição
                    </DescriptionTitle>
                    <DescriptionText>
                        {medicine?.description}
                    </DescriptionText>
                </ClassificationDescriptionContainer>
                <ContainerButtons>
                    <ButtonDosage onClick={() => navigate(`/${animal?.name}/${medicine?.name}/dosages`)}>
                        <img src={Dose} width={22} height={22} style={{ position: "absolute", left: 30 }} alt="Dosage" />&nbsp;
                        <TextButton>Doses</TextButton>
                    </ButtonDosage>
                    <ButtonFarmacology onClick={() => navigate(`/${animal?.name}/${medicine?.name}/farmacology`)}>
                        <img src={Farmacology} width={22} height={22} style={{ position: "absolute", left: 70 }} alt="Farmacology" />&nbsp;
                        <TextButton>Farmacologia</TextButton>
                    </ButtonFarmacology>
                    <ButtonBibliography onClick={() => navigate(`/${animal?.name}/${medicine?.name}/bibliography`)}>
                        <img src={Bibliography} width={22} height={22} style={{ position: "absolute", left: 25 }} alt="Bibliography" />&nbsp;
                        <TextButton>Referências Bibliográficas</TextButton>
                    </ButtonBibliography>
                </ContainerButtons>
            </ContainerMedicineDetails>
        </ContainerCustom >
    )
}

export default MedicineAnimal