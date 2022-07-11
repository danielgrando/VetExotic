import { Search, ArrowBackRounded } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import api from "../../api/api";
import { ContainerCustom, ContainerHeader, AnimalTitle, ContainerSearch, InputMedicine, ContainerTitleMedicines, ContainerMedicines, Medicine } from "./styles";

interface IMedicine {
    id: string
    name: string
    pharmacology: string
    bibliographic_references: string
    classification: string
    description: string
    created_at: Date
    updated_at: Date
}
interface IAnimalMedicines {
    id: string
    medicine: IMedicine
    animalId: string
    medicineId: string
    created_at: Date
    updated_at: Date
}

const Medicines: React.FC = () => {
    const { animal } = useParams()
    const navigate = useNavigate()

    const [medicines, setMedicines] = useState<IMedicine[]>([])

    const getMedicines = async () => {
        try {
            const response = await api.get(`/v1/medicines-animals/${'2c72aa64-adf2-4dae-bc94-3829031550d1'}` as any)
            const { data } = response
            if (data) {
                const medicinesData = data.map((medicines: IAnimalMedicines) => { return medicines.medicine })
                setMedicines(medicinesData)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getMedicines()
    }, [])

    return (
        <ContainerCustom>
            <ContainerHeader>
                <ArrowBackRounded style={{ transform: 'scale(1.5)', cursor: 'pointer' }} onClick={() => navigate('/')} />
                <AnimalTitle>{animal}</AnimalTitle>
                <div style={{ height: '25px', width: '25px' }} />
            </ContainerHeader>
            <ContainerSearch>
                <InputMedicine placeholder="Procurar por medicamento" fullWidth endAdornment={
                    <InputAdornment position="end" >
                        <Search height={60} width={60} />
                    </InputAdornment>
                } />
            </ContainerSearch>
            <ContainerTitleMedicines>
                <h3>Medicamentos</h3>
                <div />
            </ContainerTitleMedicines>
            <ContainerMedicines>
                {medicines.map((medicine, index) => (
                    <Medicine onClick={() => navigate(`/${animal}/${medicine.name}`)} key={index}><p>{medicine.name}</p></Medicine>
                ))}
            </ContainerMedicines>
        </ContainerCustom >
    )
}

export default Medicines
