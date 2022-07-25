import { createContext, ReactNode, useState } from "react"

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

type IPropsMedicineContext = {
    medicine?: IMedicine
    setMedicine?: (newState: IMedicine) => void | null
}

type MedicineContextProp = {
    children: ReactNode;
}

const MedicineInitialValue = {
    medicine: {
        id: "",
        bibliographic_references: "",
        classification: "",
        description: "",
        name: "",
        pharmacology: "",
        created_at: new Date(),
        updated_at: new Date()
    }
    ,
    setMedicine: () => { }
}


export const MedicineContext = createContext<IPropsMedicineContext>(MedicineInitialValue);

export const MedicineContextProvider = ({ children }: MedicineContextProp) => {
    const initialValue = JSON.parse(localStorage.getItem('medicine') as any)
    const [medicine, setMedicine] = useState(initialValue)

    return (
        <MedicineContext.Provider value={{ medicine, setMedicine }}>{children}</MedicineContext.Provider>
    )
}
