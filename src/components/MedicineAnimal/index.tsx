import { useNavigate } from "react-router-dom";
import { ContainerCustom, ContainerHeader } from "../Medicines/styles"
// import Dose from '../../assets/dose.png'
// import Farmacology from '../../assets/farmacology.png'
import Bibliography from '../../assets/bibliography.png'
import { ArrowBackRounded } from "@mui/icons-material";
import {
    ButtonBibliography, ClassificationDescriptionContainer,
    ContainerButtons, ContainerMedicineDetails, MedicineTitle, TextButton,
    MedicineIcon, SubTitle, ClassificationTitle, ClassificationText, DescriptionTitle, DescriptionText
} from "./styles";
import { MedicineContext } from '../../utils/MedicineContext'
import { AnimalContext } from '../../utils/animalGeneralContext'
import { useState, useContext } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import { styled } from "@mui/material/styles";
import Dosages from "../Dosages";
import Farmacology from "../Farmacology"

const AntTabs = styled(Tabs)({
    "& .MuiTabs-indicator": {
        backgroundColor: "rgb(48, 255, 44)"
    }
});

const AntTab = styled(Tab)({
    fontFamily: [
        'Comfortaa',
    ],
    fontSize: '1.1em',
    fontWeight: 'bold',
    textTransform: 'none',
});

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            style={{ marginTop: '1.5rem', width: '100%' }}
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <>{children}</>
            )}
        </div>
    );
}

const MedicineAnimal: React.FC = () => {
    const navigate = useNavigate()

    const { animal } = useContext(AnimalContext)
    const { medicine } = useContext(MedicineContext)

    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

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
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <AntTabs
                        centered={true}
                        textColor="inherit"
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                    >
                        <AntTab label="Descrição" />
                        <AntTab label="Dose" />
                        <AntTab label="Farmacologia" />
                    </AntTabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '55vh', width: '100%' }}>
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
                            {/* <ButtonFarmacology onClick={() => navigate(`/${animal?.name}/${medicine?.name}/farmacology`)}>
                                <img src={Farmacology} width={22} height={22} style={{ position: "absolute", left: 70 }} alt="Farmacology" />&nbsp;
                                <TextButton>Farmacologia</TextButton>
                            </ButtonFarmacology> */}
                            <ButtonBibliography onClick={() => navigate(`/${animal?.name}/${medicine?.name}/bibliography`)}>
                                <img src={Bibliography} width={22} height={22} style={{ position: "absolute", left: 25 }} alt="Bibliography" />&nbsp;
                                <TextButton>Referências Bibliográficas</TextButton>
                            </ButtonBibliography>
                        </ContainerButtons>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Dosages />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Farmacology />
                </TabPanel>
            </ContainerMedicineDetails>
        </ContainerCustom >
    )
}

export default MedicineAnimal