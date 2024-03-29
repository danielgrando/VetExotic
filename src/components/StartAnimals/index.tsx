import { CircularProgress } from "@mui/material"
import { useEffect, useState } from "react"
import api from "../../api/api"
import Animals from "../Animals"
import { BoxMain, TextSection } from "./styles"
interface IAnimals {
    id: string
    name: string
    icon: string
    created_at: Date
    updated_at: Date
}

const StartAnimals: React.FC = () => {

    const [animals, setAnimals] = useState<IAnimals[]>([])
    const [loading, setLoading] = useState(100)

    const getAnimals = async () => {
        try {
            const response = await api.get('/v1/animals')
            const { data } = response

            if (data) {
                const orderedAnimals = data.sort((currentAnimal, previousAnimal) => +currentAnimal.id > +previousAnimal.id ? 1 : -1)
                setAnimals(orderedAnimals)
                localStorage.setItem("animals", JSON.stringify(orderedAnimals))
                setLoading(0)
            }
        } catch (error) {
            const animalsCached: any = localStorage.getItem("animals")
            setAnimals(JSON.parse(animalsCached))
            setLoading(0)
        }
    }

    useEffect(() => {
        getAnimals()
    }, [])

    return (
        <BoxMain>
            {loading ?
                <CircularProgress color="success" value={loading} /> :
                <>
                    <TextSection>Selecione um dos grupos de animais abaixo para iniciar a consulta:</TextSection>
                    <Animals animals={animals} />
                </>
            }
        </BoxMain>
    )
}

export default StartAnimals