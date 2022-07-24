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

type AnimaContextProp = {
    children: ReactNode;
}

const animalInitialValue = {
    animal: { id: '', name: '', icon: '', created_at: new Date(), updated_at: new Date() },
    setAnimal: () => { }
}

export const AnimalContext = createContext<IPropsAnimalContext>(animalInitialValue);

export const AnimalContextProvider = ({ children }: AnimaContextProp) => {
    const [animal, setAnimal] = useState(animalInitialValue.animal)

    return (
        <AnimalContext.Provider value={{ animal, setAnimal }}>{children}</AnimalContext.Provider>
    )
}



