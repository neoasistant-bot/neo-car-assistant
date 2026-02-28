import { Box, Container, Typography, Button, Stack, Chip } from '@mui/material'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'
import BuildIcon from '@mui/icons-material/Build'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'

// Página principal — placeholder hasta implementar auth
export default function HomePage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #003C8F 0%, #1565C0 50%, #5E92F3 100%)',
        color: 'white',
        textAlign: 'center',
        px: 3,
      }}
    >
      <Container maxWidth="md">
        {/* Ícono principal */}
        <DirectionsCarIcon sx={{ fontSize: 80, mb: 2, opacity: 0.9 }} />

        <Typography variant="h2" component="h1" fontWeight={700} gutterBottom>
          Neo Car Assistant
        </Typography>

        <Typography variant="h5" sx={{ opacity: 0.85, mb: 4, maxWidth: 600, mx: 'auto' }}>
          Tu asistente inteligente para el mantenimiento de vehículos.
          Recordatorios, historial de service y más.
        </Typography>

        {/* Features */}
        <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap" mb={6} gap={1}>
          <Chip
            icon={<BuildIcon />}
            label="Historial de service"
            sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white', borderColor: 'rgba(255,255,255,0.4)', border: '1px solid' }}
          />
          <Chip
            icon={<NotificationsActiveIcon />}
            label="Recordatorios automáticos"
            sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white', borderColor: 'rgba(255,255,255,0.4)', border: '1px solid' }}
          />
          <Chip
            icon={<DirectionsCarIcon />}
            label="Múltiples vehículos"
            sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white', borderColor: 'rgba(255,255,255,0.4)', border: '1px solid' }}
          />
        </Stack>

        {/* CTAs — funcionales cuando auth esté implementado */}
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: 'white',
              color: 'primary.main',
              fontWeight: 700,
              px: 4,
              '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' },
            }}
          >
            Comenzar — es gratis
          </Button>
          <Button
            variant="outlined"
            size="large"
            sx={{
              borderColor: 'rgba(255,255,255,0.7)',
              color: 'white',
              px: 4,
              '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' },
            }}
          >
            Iniciar sesión
          </Button>
        </Stack>

        <Typography variant="body2" sx={{ mt: 6, opacity: 0.5 }}>
          🚧 En construcción — v0.1.0
        </Typography>
      </Container>
    </Box>
  )
}
