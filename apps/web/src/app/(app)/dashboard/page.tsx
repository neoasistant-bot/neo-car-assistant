'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  AppBar,
  Avatar,
  Box,
  Container,
  Fab,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'
import { supabase } from '@/lib/supabase'

export default function DashboardPage() {
  const router = useRouter()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = async () => {
    handleMenuClose()
    await supabase.auth.signOut()
    router.push('/login')
    router.refresh()
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* AppBar */}
      <AppBar position="static" elevation={2}>
        <Toolbar>
          <DirectionsCarIcon sx={{ mr: 1.5 }} />
          <Typography variant="h6" fontWeight={700} sx={{ flexGrow: 1 }}>
            Neo Car Assistant
          </Typography>
          <IconButton onClick={handleAvatarClick} size="small">
            <Avatar sx={{ width: 36, height: 36, bgcolor: 'primary.dark' }}>M</Avatar>
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={handleLogout}>Cerrar sesión</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Main content — empty state */}
      <Container maxWidth="md">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 'calc(100vh - 64px)',
            textAlign: 'center',
            gap: 2,
            pb: 8,
          }}
        >
          <DirectionsCarIcon sx={{ fontSize: 80, color: 'primary.main', opacity: 0.35 }} />
          <Typography variant="h6" color="text.secondary" fontWeight={500}>
            Todavía no agregaste ningún auto
          </Typography>
          <Typography variant="body2" color="text.disabled">
            Tocá el botón + para registrar tu primer vehículo
          </Typography>
        </Box>
      </Container>

      {/* FAB flotante */}
      <Fab
        color="primary"
        aria-label="Agregar auto"
        sx={{ position: 'fixed', bottom: 32, right: 32 }}
        onClick={() => {
          // TODO: abrir modal de agregar auto
        }}
      >
        <AddIcon />
      </Fab>
    </Box>
  )
}
