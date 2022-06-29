import Animals from "../Animals"
import { BoxMain, TextSection } from "./styles"


const StartAnimals: React.FC = () => {
    return (
        <BoxMain>
            <TextSection >Selecione um dos grupos de animais abaixo para iniciar a consulta:</TextSection>
            <Animals />
        </BoxMain>
    )
}

export default StartAnimals