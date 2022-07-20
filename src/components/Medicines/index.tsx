import { Search, ArrowBackRounded } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import { AnimalContext, MedicineContext } from "../../App";
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
    const navigate = useNavigate()

    const [medicines, setMedicines] = useState<IMedicine[]>([])

    const { animal } = useContext(AnimalContext);
    const { setMedicine } = useContext(MedicineContext)

    const getMedicines = async () => {
        try {
            const response = await api.get(`/v1/medicines-animals/${animal?.id}` as any)
            const { data } = response
            if (data) {
                const medicinesData = data.map((medicines: IAnimalMedicines) => { return medicines.medicine })
                setMedicines(medicinesData)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const setMedicineContextAndNavigateToMedicinesDetails = (medicine: IMedicine) => {
        setMedicine!(medicine)
        navigate(`/${animal?.name}/${medicine.name}`)
    }

    useEffect(() => {
        getMedicines()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ContainerCustom>
            <ContainerHeader>
                <ArrowBackRounded style={{ transform: 'scale(1.5)', cursor: 'pointer' }} onClick={() => navigate('/')} />
                <AnimalTitle>{animal?.name}</AnimalTitle>
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
                    <Medicine onClick={() => setMedicineContextAndNavigateToMedicinesDetails(medicine)} key={index}><p>{medicine.name}</p></Medicine>
                ))}
            </ContainerMedicines>
        </ContainerCustom >
    )
}

export default Medicines
