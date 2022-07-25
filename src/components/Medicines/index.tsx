import { Search, ArrowBackRounded, ArrowForwardIosRounded } from "@mui/icons-material";
import { CircularProgress, InputAdornment } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import { MedicineContext } from '../../utils/MedicineContext'
import { AnimalContext } from '../../utils/animalGeneralContext'
import {
    ContainerCustom, ContainerHeader, AnimalTitle, ContainerSearch,
    InputMedicine, ContainerTitleMedicines, ContainerMedicines,
    Medicine, TitleMedicine, MedicineName
} from "./styles";

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
    const [allMedicines, setAllMedicines] = useState<IMedicine[]>([])
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(100)

    const { animal } = useContext(AnimalContext);

    const { setMedicine } = useContext(MedicineContext)

    const getMedicines = async () => {
        try {
            const response = await api.get(`/v1/medicines-animals/${animal?.id}` as any)
            const { data } = response
            if (data) {
                const medicinesData = data.map((medicines: IAnimalMedicines) => { return medicines.medicine })
                setMedicines(medicinesData)
                setAllMedicines(medicinesData)
                localStorage.setItem("medicines", JSON.stringify(data))
                setLoading(0)
            }
        } catch (error) {
            const medicinesCached: any = localStorage.getItem("medicines")
            setMedicines(JSON.parse(medicinesCached))
        }
    }

    const setMedicineContextAndNavigateToMedicinesDetails = (medicine: IMedicine) => {
        localStorage.setItem("medicine", JSON.stringify(medicine))
        setMedicine!(medicine)
        navigate(`/${animal?.name}/${medicine.name}`)
    }

    const filterMedicines = () => {
        const medicinesFiltered = medicines.filter((medicine) => medicine.name.toLowerCase().includes(search.toLowerCase()))
        setMedicines(medicinesFiltered)

        if (search === "" || medicinesFiltered.length === 0) {
            setMedicines(allMedicines)
        }

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
                <InputMedicine placeholder="Procurar por medicamento" fullWidth
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onClick={filterMedicines}
                    onKeyUp={filterMedicines}
                    endAdornment={
                        <InputAdornment position="end" >
                            <Search height={60} width={60} />
                        </InputAdornment>
                    } />
            </ContainerSearch>
            <ContainerTitleMedicines>
                <TitleMedicine>Medicamentos</TitleMedicine>
                <div />
            </ContainerTitleMedicines>
            <ContainerMedicines>
                {loading ? <CircularProgress color="success" value={loading} /> :
                    medicines.map((medicine, index) => (
                        <Medicine onClick={() => setMedicineContextAndNavigateToMedicinesDetails(medicine)} key={index}>
                            <MedicineName>{medicine.name}</MedicineName>
                            <ArrowForwardIosRounded style={{ transform: 'scale(1.1)', cursor: 'pointer', color: 'white' }} />
                        </Medicine>
                    ))
                }
            </ContainerMedicines>
        </ContainerCustom >
    )
}

export default Medicines
