import { createContext, ReactNode, useState } from "react";

interface IAnimal {
    id: string
    name: string
    icon: string
    created_at: Date
    updated_at: Date
}

type IPropsAnimalContext = {
    animal?: IAnimal
    setAnimal?: (newState: IAnimal) => void | null
}

type AnimalContextProp = {
    children: ReactNode;
}

const animalInitialValue = {
    animal: { id: '', name: '', icon: '', created_at: new Date(), updated_at: new Date() },
    setAnimal: () => { }
}

export const AnimalContext = createContext<IPropsAnimalContext>(animalInitialValue);

export const AnimalContextProvider = ({ children }: AnimalContextProp) => {
    const initialValue = JSON.parse(localStorage.getItem('animal') as any)
    const [animal, setAnimal] = useState(initialValue)

    return (
        <AnimalContext.Provider value={{ animal, setAnimal }}>{children}</AnimalContext.Provider>
    )
}



