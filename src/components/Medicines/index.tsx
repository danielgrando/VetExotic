import { Search, ArrowBackRounded } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { ContainerCustom, ContainerHeader, AnimalTitle, ContainerSearch, InputMedicine, ContainerTitleMedicines, ContainerMedicines, Medicine } from "./styles";

const Medicines: React.FC = () => {
    const { animal } = useParams();
    const navigate = useNavigate()

    const medicines = [{ id: 'Enrofloxacina' }, { id: 'Meloxicam' }, { id: 'Nistatina' }, { id: 'Tramadol' }, { id: 'Ivermectina' }]
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
                {medicines.map(medicine => (
                    <Medicine onClick={() => navigate(`/${animal}/${medicine.id}`)}><p>{medicine.id}</p></Medicine>
                ))}
            </ContainerMedicines>
        </ContainerCustom >
    )
}

export default Medicines
