import { createTheme } from '@mui/material/styles'

// Paleta de colores: azul automotriz + alertas
const automotiveBlue = {
  main: '#1565C0',    // Azul principal — confianza, tecnología
  light: '#5E92F3',
  dark: '#003C8F',
  contrastText: '#FFFFFF',
}

const alertRed = '#D32F2F'    // Urgente / crítico
const alertYellow = '#F9A825' // Advertencia / próximo vencimiento
const alertGreen = '#388E3C'  // Todo en orden

// Tema claro
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: automotiveBlue,
    secondary: {
      main: '#546E7A',  // Gris azulado — secundario
      light: '#819CA9',
      dark: '#29434E',
      contrastText: '#FFFFFF',
    },
    error: {
      main: alertRed,
    },
    warning: {
      main: alertYellow,
    },
    success: {
      main: alertGreen,
    },
    background: {
      default: '#F5F7FA',
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
  },
  shape: {
    borderRadius: 12,
  },
})

// Tema oscuro
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: automotiveBlue,
    secondary: {
      main: '#819CA9',
      light: '#B0BEC5',
      dark: '#546E7A',
      contrastText: '#FFFFFF',
    },
    error: {
      main: alertRed,
    },
    warning: {
      main: alertYellow,
    },
    success: {
      main: alertGreen,
    },
    background: {
      default: '#0A0E1A',
      paper: '#111827',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
  },
  shape: {
    borderRadius: 12,
  },
})

// Exportación por defecto: tema claro
export default lightTheme
