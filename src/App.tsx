import usePersistedState from './utils/usePersistedState';

import { ThemeProvider, DefaultTheme } from 'styled-components'
import light from './styles/themes/light'
import dark from './styles/themes/dark'

import GlobalStyle from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes';
import { ThemeContextProvider } from './ThemeContext/themeContext';
import ResponsiveDrawer from './components/Drawer';
import { createContext, useEffect, useState } from 'react';
import { AnimalContextProvider } from './utils/animalContext';

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


  const [medicine, setMedicine] = useState(MedicineInitialValue.medicine)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions
  }

  const { width } = useWindowDimensions();

  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <div style={{ display: 'flex' }}>
            <ResponsiveDrawer toggleTheme={toggleTheme} />
            <AnimalContextProvider>
              <MedicineContext.Provider value={{ medicine, setMedicine }}>
                <AppRoutes />
              </MedicineContext.Provider>
            </AnimalContextProvider>
            {width > 1200 && <div style={{ width: '240px' }}></div>}
          </div>
        </ThemeProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  );
}

export default App;
