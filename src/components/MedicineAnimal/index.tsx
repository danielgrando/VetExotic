import { useNavigate, useParams } from "react-router-dom";
import { ContainerCustom, ContainerHeader } from "../Medicines/styles"
import Dose from '../../assets/dose.png'
import Farmacology from '../../assets/farmacology.png'
import Bibliography from '../../assets/bibliography.png'
import { ArrowBackRounded } from "@mui/icons-material";
import {
    ButtonBibliography, ButtonDosage, ButtonFarmacology, Classification,
    ContainerButtons, ContainerMedicineDetails, MedicineTitle, TextButton,
    MedicineIcon, SubTitle
} from "./styles";

const MedicineAnimal: React.FC = () => {
    const navigate = useNavigate()
    const { animal, medicine } = useParams();

    return (
        <ContainerCustom>
            <ContainerHeader>
                <ArrowBackRounded style={{ transform: 'scale(1.5)', cursor: 'pointer' }} onClick={() => navigate(`/medicines/${animal}`)} />
                <MedicineTitle>
                    <MedicineIcon width={22} height={22} />
                    {medicine}
                </MedicineTitle>
                <div style={{ height: '25px', width: '25px' }} />
            </ContainerHeader>
            <SubTitle>
                ({animal})
            </SubTitle>
            <ContainerMedicineDetails>
                <Classification>Classificação</Classification>
                <ContainerButtons>
                    <ButtonDosage onClick={() => navigate(`/${animal}/${medicine}/dosages`)}>
                        <img src={Dose} width={22} height={22} style={{ position: "absolute", left: 30 }} alt="Dosage" />&nbsp;
                        <TextButton>Doses</TextButton>
                    </ButtonDosage>
                    <ButtonFarmacology onClick={() => navigate(`/${animal}/${medicine}/farmacology`)}>
                        <img src={Farmacology} width={22} height={22} style={{ position: "absolute", left: 70 }} alt="Farmacology" />&nbsp;
                        <TextButton>Farmacologia</TextButton>
                    </ButtonFarmacology>
                    <ButtonBibliography onClick={() => navigate(`/${animal}/${medicine}/bibliography`)}>
                        <img src={Bibliography} width={22} height={22} style={{ position: "absolute", left: 25 }} alt="Bibliography" />&nbsp;
                        <TextButton>Referências Bibliográficas</TextButton>
                    </ButtonBibliography>
                </ContainerButtons>
            </ContainerMedicineDetails>


        </ContainerCustom >
    )
}

export default MedicineAnimal