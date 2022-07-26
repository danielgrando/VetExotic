// import { useNavigate } from "react-router-dom";
// import { ContainerCustom, ContainerHeader } from "../Medicines/styles"
// import { ArrowBackRounded } from "@mui/icons-material";
import {
    ContainerDosageDetails, DosageText, Text, Title, ContainerItemDetail, ContainerDosage,
    TextNameDosage,
    AccordionCustom
} from "./styles";
import { AnimalContext } from '../../utils/animalGeneralContext'
import { MedicineContext } from '../../utils/MedicineContext'
import api from "../../api/api";
import { useContext, useEffect, useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionDetails, AccordionSummary, CircularProgress } from "@mui/material";
interface IDosage {
    id: string
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

    const [dosage, setDosage] = useState<IDosage[]>([])
    const [loading, setLoading] = useState(100)

    const { animal } = useContext(AnimalContext)
    const { medicine } = useContext(MedicineContext)


    const getDosage = async () => {
        try {
            const response = await api.get(`/v1/animal-dosage/${animal?.id}/${medicine?.id}`)
            const { data } = response
            if (data) {
                setDosage(data)
                localStorage.setItem("dosage", JSON.stringify(data))
                setLoading(0)
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
        <ContainerDosage>
            {loading ?
                <CircularProgress color="success" value={loading} />
                :
                dosage?.map(dosage => (
                    <AccordionCustom
                        TransitionProps={{ unmountOnExit: true }}
                        key={dosage.id}
                        defaultExpanded={dosage.name === 'Dose Geral' ? true : false}
                    // style={{  }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <TextNameDosage>{dosage.name}</TextNameDosage>
                        </AccordionSummary>
                        <AccordionDetails>
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
                        </AccordionDetails>
                    </AccordionCustom>
                ))
            }
        </ContainerDosage>
    )
}

export default Dosages




