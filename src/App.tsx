import usePersistedState from './utils/usePersistedState';

import { ThemeProvider, DefaultTheme } from 'styled-components'
import light from './styles/themes/light'
import dark from './styles/themes/dark'

import GlobalStyle from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes';
import { ThemeContextProvider } from './ThemeContext/themeContext';
import ResponsiveDrawer from './components/Drawer';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

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
            <AppRoutes />
          </div>
        </ThemeProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  );
}

export default App;
