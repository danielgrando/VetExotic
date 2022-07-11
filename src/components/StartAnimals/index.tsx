import { useEffect, useState } from "react"
import api from "../../api/api"
import Animals from "../Animals"
import { BoxMain, TextSection } from "./styles"

const StartAnimals: React.FC = () => {

    const [animals, setAnimals] = useState([])

    const getAnimals = async () => {
        try {
            const response = await api.get('/v1/animals')
            const { data } = response
            if (data) {
                setAnimals(data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAnimals()
    }, [])

    return (
        <BoxMain>
            <TextSection >Selecione um dos grupos de animais abaixo para iniciar a consulta:</TextSection>
            <Animals animals={animals} />
        </BoxMain>
    )
}

export default StartAnimals