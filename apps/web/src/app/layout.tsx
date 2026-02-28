'use client'

import type { Metadata } from 'next'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { lightTheme } from '@/theme/theme'
import './globals.css'

// Nota: metadata no puede exportarse desde un Client Component.
// Moverlo a un archivo separado si se necesita metadata dinámica.

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={lightTheme}>
            {/* CssBaseline normaliza estilos base entre navegadores */}
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
