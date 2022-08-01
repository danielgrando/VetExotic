import { ArrowBackRounded, ArrowForwardIosRounded } from "@mui/icons-material";
import { Input, CircularProgress, InputAdornment } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import { MedicineContext } from '../../utils/MedicineContext'
import { AnimalContext } from '../../utils/animalGeneralContext'
import {
    ContainerCustom, ContainerHeader, AnimalTitle, ContainerSearch,
    ContainerTitleMedicines, ContainerMedicines,
    Medicine, TitleMedicine, MedicineName, SearchIcon
} from "./styles";
import { ThemeContext } from "styled-components";
import { createTheme, ThemeProvider } from '@mui/material/styles';
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

    const { colors } = useContext(ThemeContext)
    const { animal } = useContext(AnimalContext);
    const { setMedicine } = useContext(MedicineContext)

    const getMedicines = async () => {
        try {
            const response = await api.get(`/v1/medicines-animals/${animal?.id}` as any)
            const { data } = response
            if (data) {
                const medicinesData = data.map((medicines: IAnimalMedicines) => { return medicines.medicine })
                const medicinesOrganized = medicinesData.sort(function (currentMedicine, previousMedicine) {
                    return currentMedicine.name < previousMedicine.name ? -1 : currentMedicine.name > previousMedicine.name ? 1 : 0;
                });
                setMedicines(medicinesOrganized)
                setAllMedicines(medicinesOrganized)
                localStorage.setItem("medicines", JSON.stringify(data))
                setLoading(0)
            }
        } catch (error) {
            const medicinesCached: any = localStorage.getItem("medicines")
            setMedicines(JSON.parse(medicinesCached))
            setLoading(0)
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

    const theme = createTheme({
        palette: {
            primary: {
                main: colors.hoverInputMedicines,
            },
        }
    });

    return (
        <ContainerCustom>
            <ContainerHeader>
                <ArrowBackRounded style={{ transform: 'scale(1.5)', cursor: 'pointer' }} onClick={() => navigate('/')} />
                <AnimalTitle>{animal?.name}</AnimalTitle>
                <div style={{ height: '25px', width: '25px' }} />
            </ContainerHeader>
            <ContainerSearch>
                <ThemeProvider theme={theme}>
                    <Input
                        color="primary"
                        style={{ fontFamily: 'Comfortaa', color: colors.text }}
                        placeholder="Procurar por medicamento"
                        fullWidth
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onClick={filterMedicines}
                        onKeyUp={filterMedicines}
                        endAdornment={
                            <InputAdornment position="end" >
                                <SearchIcon height={60} width={60} />
                            </InputAdornment>
                        } />
                </ThemeProvider>
            </ContainerSearch>
            <ContainerTitleMedicines>
                <TitleMedicine>Medicamentos</TitleMedicine>
                <div />
            </ContainerTitleMedicines>
            <ContainerMedicines>
                {loading ? <CircularProgress color="success" value={100} style={{
                    display: 'flex', margin: 'auto',
                }} /> :
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