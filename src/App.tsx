import usePersistedState from './utils/usePersistedState';

import { ThemeProvider, DefaultTheme } from 'styled-components'
import light from './styles/themes/light'
import dark from './styles/themes/dark'

import GlobalStyle from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes';
import { ThemeContextProvider } from './ThemeContext/themeContext';
import ResponsiveDrawer from './components/Drawer';
import { createContext, useState } from 'react';
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


export const AnimalContext = createContext<IPropsAnimalContext>({
  animal: { id: '', name: '', icon: '', created_at: new Date(), updated_at: new Date() }, setAnimal: () => { }
});

export const MedicineContext = createContext<IPropsMedicineContext>({
  medicine: {
    id: "",
    bibliographic_references: "",
    classification: "",
    description: "",
    name: "",
    pharmacology: "",
    created_at: new Date(),
    updated_at: new Date()
  }, setMedicine: () => { }
});

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  const initialValue = {
    animal: { id: '', name: '', icon: '', created_at: new Date(), updated_at: new Date() },
    setAnimal: () => { }
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
    },
    setMedicine: () => { }
  }

  const [animal, setAnimal] = useState(initialValue.animal)
  const [medicine, setMedicine] = useState(MedicineInitialValue.medicine)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <div style={{ display: 'flex' }}>
            <ResponsiveDrawer toggleTheme={toggleTheme} />
            <AnimalContext.Provider value={{ animal, setAnimal }}>
              <MedicineContext.Provider value={{ medicine, setMedicine }}>
                <AppRoutes />
              </MedicineContext.Provider>
            </AnimalContext.Provider>
          </div>
        </ThemeProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  );
}

export default App;
