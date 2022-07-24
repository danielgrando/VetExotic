import { useNavigate } from "react-router-dom";
import { ContainerCustom, ContainerHeader } from "../Medicines/styles"
import { ArrowBackRounded } from "@mui/icons-material";
import {
    ContainerDosageDetails, MedicineTitle,
    MedicineIcon, SubTitle, DosageText, Text, Title, ContainerItemDetail, ContainerDosage
} from "./styles";
import { MedicineContext } from "../../App";
import { AnimalContext } from '../../utils/AnimalContext'
import api from "../../api/api";
import { useContext, useEffect, useState } from "react";

interface IDosage {
    animalId: string
    application_routes: string
    dosage: string
    frequency: string
    name: string
    observations: string
    created_at: Date
    updated_at: Date
}

const Dosages: React.FC = () => {
    const navigate = useNavigate()

    const [dosage, setDosage] = useState<IDosage[]>([])

    const { animal } = useContext(AnimalContext)
    const { medicine } = useContext(MedicineContext)


    const getDosage = async () => {
        try {
            const response = await api.get(`/v1/animal-dosage/${animal?.id}/${medicine?.id}`)
            const { data } = response
            if (data) {
                setDosage(data)
                localStorage.setItem("dosages", JSON.stringify(data))
            }
        } catch (error) {
            const dosagesCached: any = localStorage.getItem("dosages")
            setDosage(JSON.parse(dosagesCached))
        }
    }

    useEffect(() => {
        getDosage()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ContainerCustom>
            <ContainerHeader>
                <ArrowBackRounded style={{ transform: 'scale(1.5)', cursor: 'pointer' }} onClick={() => navigate(`/${animal?.name}/${medicine?.name}`)} />
                <MedicineTitle>
                    <MedicineIcon width={22} height={22} />
                    {medicine?.name}
                </MedicineTitle>
                <div style={{ height: '25px', width: '25px' }} />
            </ContainerHeader>
            <SubTitle>{animal?.name}</SubTitle>
            <ContainerDosage>
                {dosage?.map(dosage => (
                    <ContainerDosageDetails>
                        <ContainerItemDetail>
                            <Title>Vias de aplicação</Title>
                            <Text>{dosage.application_routes}</Text>
                        </ContainerItemDetail>
                        <ContainerItemDetail>
                            <Title>Frequência</Title>
                            <Text>{dosage.frequency}</Text>
                        </ContainerItemDetail>
                        <ContainerItemDetail>
                            <Title>Dose</Title>
                            <DosageText>{dosage.dosage}</DosageText>
                        </ContainerItemDetail>
                        <ContainerItemDetail>
                            <Title>Observações</Title>
                            <Text>{dosage.observations}</Text>
                        </ContainerItemDetail>
                    </ContainerDosageDetails>
                ))}
            </ContainerDosage>
        </ContainerCustom >
    )
}

export default Dosages




