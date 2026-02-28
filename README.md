# 🚗 Neo Car Assistant

Asistente inteligente para el mantenimiento de vehículos. Recordatorios de service, historial de mantenimiento, VTV tracking y más.

## Stack

| Capa | Tecnología |
|------|-----------|
| **Web** | Next.js 14 (App Router) + TypeScript + MUI v5 + Tailwind CSS |
| **Mobile** | Kotlin + Jetpack Compose (Android) |
| **Backend / DB** | Supabase (PostgreSQL + Auth + Storage + Realtime) |
| **Hosting** | Vercel (web) + Google Play (Android) |

## Estructura del proyecto

```
neo-car-assistant/
├── apps/
│   ├── web/          ← App Next.js (TypeScript + MUI)
│   └── android/      ← App Android (Kotlin + Jetpack Compose)
├── supabase/
│   ├── migrations/   ← Migraciones SQL versionadas
│   └── schema.sql    ← Schema completo de la base de datos
├── docker-compose.yml
└── README.md
```

## Setup

### Requisitos

- Node.js 20+
- npm / pnpm
- Cuenta en [Supabase](https://supabase.com) (gratuita)

### 1. Clonar el repo

```bash
git clone https://github.com/neoasistant-bot/neo-car-assistant.git
cd neo-car-assistant
```

### 2. Configurar Supabase

1. Crear un proyecto en [app.supabase.com](https://app.supabase.com)
2. Ir a **SQL Editor** y ejecutar el contenido de `supabase/schema.sql`
3. Copiar las credenciales desde **Settings → API**

### 3. Configurar la app web

```bash
cd apps/web
cp .env.example .env.local
# Completar NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_ANON_KEY en .env.local
npm install
npm run dev
```

La app estará disponible en [http://localhost:3000](http://localhost:3000).

### 4. Desarrollo con Supabase CLI (opcional)

```bash
# Instalar Supabase CLI
npm install -g supabase

# Iniciar Supabase local
supabase start

# Aplicar schema
supabase db push
```

## Apps

- [📱 Web App](./apps/web) — Next.js + TypeScript + MUI
- [🤖 Android App](./apps/android) — Kotlin + Jetpack Compose *(en construcción)*

## Funcionalidades

- [x] Schema de base de datos completo
- [x] Scaffold web (Next.js + MUI + Supabase)
- [ ] Autenticación (Supabase Auth)
- [ ] CRUD de vehículos
- [ ] Registro de service
- [ ] Tracking de VTV
- [ ] Sistema de recordatorios / notificaciones
- [ ] App Android

## Contribuir

Por ahora es un proyecto personal. Si tenés sugerencias, abrí un issue.

---

Desarrollado con ❤️ y Neo (tu asistente de IA) 🤖
