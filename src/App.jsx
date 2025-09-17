
import { ColorModeContext, useMode } from './themes'
import { ThemeProvider } from '@mui/material/styles'
import TopBar from './pages/global/topbar';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
          <main>
            <TopBar/>
          </main>
      </ThemeProvider>
    </ColorModeContext.Provider>

  )
}

export default App
