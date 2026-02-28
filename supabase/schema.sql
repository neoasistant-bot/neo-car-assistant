-- ============================================================
-- Neo Car Assistant — Schema de base de datos (Supabase/PostgreSQL)
-- ============================================================

-- Perfiles de usuario (extensión de auth.users de Supabase)
create table profiles (
  id uuid references auth.users on delete cascade primary key,
  name text,
  email text,
  created_at timestamptz default now()
);

-- Habilitar RLS (Row Level Security)
alter table profiles enable row level security;
create policy "Los usuarios solo ven su propio perfil"
  on profiles for all
  using (auth.uid() = id);

-- ============================================================
-- Vehículos
-- ============================================================
create table cars (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references profiles(id) on delete cascade not null,
  name text not null,                                         -- Ej: "Mi Volkswagen"
  brand text not null,                                        -- Ej: "Volkswagen"
  model text not null,                                        -- Ej: "Gol Trend"
  year integer not null,
  plate text not null,                                        -- Patente
  mileage integer not null default 0,                         -- Kilometraje actual
  mileage_unit text not null default 'km' check (mileage_unit in ('km', 'mi')),
  photo_url text,                                             -- URL en Supabase Storage
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table cars enable row level security;
create policy "Los usuarios solo ven sus propios autos"
  on cars for all
  using (auth.uid() = user_id);

-- ============================================================
-- Catálogo de tipos de service
-- ============================================================
create table service_types (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  description text,
  interval_km integer,                                        -- Intervalo recomendado en km
  interval_months integer,                                    -- Intervalo recomendado en meses
  priority text not null default 'medium' check (priority in ('high', 'medium', 'low')),
  is_default boolean default true                             -- Si viene preinstalado
);

-- Los service_types son públicos (solo lectura para todos los usuarios)
alter table service_types enable row level security;
create policy "Service types visibles para todos los usuarios autenticados"
  on service_types for select
  using (auth.role() = 'authenticated');

-- ============================================================
-- Registros de VTV (Verificación Técnica Vehicular)
-- ============================================================
create table vtv_records (
  id uuid default gen_random_uuid() primary key,
  car_id uuid references cars(id) on delete cascade not null,
  date date not null,                                         -- Fecha de la VTV
  next_date date,                                             -- Próxima VTV
  station text,                                               -- Planta de VTV
  notes text,
  created_at timestamptz default now()
);

alter table vtv_records enable row level security;
create policy "Los usuarios solo ven los registros VTV de sus autos"
  on vtv_records for all
  using (
    exists (
      select 1 from cars
      where cars.id = vtv_records.car_id
      and cars.user_id = auth.uid()
    )
  );

-- ============================================================
-- Registros de service / mantenimiento
-- ============================================================
create table service_records (
  id uuid default gen_random_uuid() primary key,
  car_id uuid references cars(id) on delete cascade not null,
  service_type_id uuid references service_types(id) not null,
  date date not null,
  mileage_at_service integer not null,                        -- Kilometraje al momento del service
  next_date date,                                             -- Fecha aproximada del próximo service
  next_mileage integer,                                       -- Km estimado del próximo service
  shop text,                                                  -- Taller donde se realizó
  cost decimal(10,2),                                         -- Costo en moneda local
  notes text,
  created_at timestamptz default now()
);

alter table service_records enable row level security;
create policy "Los usuarios solo ven los service records de sus autos"
  on service_records for all
  using (
    exists (
      select 1 from cars
      where cars.id = service_records.car_id
      and cars.user_id = auth.uid()
    )
  );

-- ============================================================
-- Configuración de notificaciones
-- ============================================================
create table notification_settings (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references profiles(id) on delete cascade not null,
  car_id uuid references cars(id) on delete cascade,          -- null = aplica a todos los autos
  frequency text not null default 'weekly' check (frequency in ('weekly', 'biweekly', 'monthly')),
  preferred_hour integer default 9,                           -- Hora preferida para notificaciones (0-23)
  enabled boolean default true,
  created_at timestamptz default now()
);

alter table notification_settings enable row level security;
create policy "Los usuarios solo ven sus propias configuraciones de notificación"
  on notification_settings for all
  using (auth.uid() = user_id);

-- ============================================================
-- Trigger para actualizar updated_at en cars
-- ============================================================
create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger cars_updated_at
  before update on cars
  for each row
  execute function update_updated_at_column();

-- ============================================================
-- Datos iniciales: tipos de service predefinidos
-- ============================================================
insert into service_types (name, description, interval_km, interval_months, priority) values
('Aceite y filtro de aceite', 'Cambio de aceite de motor y filtro de aceite', 10000, 12, 'high'),
('Filtro de aire', 'Reemplazo del filtro de aire del motor', 20000, 24, 'medium'),
('Filtro de combustible', 'Reemplazo del filtro de combustible', 30000, 24, 'medium'),
('Filtro de habitáculo', 'Filtro de polen / habitáculo', 20000, 12, 'low'),
('Bujías convencionales', 'Reemplazo de bujías convencionales', 30000, null, 'high'),
('Bujías iridio/platino', 'Reemplazo de bujías de alta duración', 80000, null, 'high'),
('Correa de distribución', 'Reemplazo de correa de distribución — CRÍTICO', 80000, 60, 'high'),
('Líquido de frenos', 'Cambio de líquido de frenos (DOT)', 40000, 24, 'high'),
('Líquido refrigerante', 'Cambio de líquido refrigerante', 40000, 24, 'medium'),
('Pastillas de freno', 'Inspección y reemplazo de pastillas', 40000, null, 'high'),
('Neumáticos', 'Inspección general, rotación y reemplazo', 50000, 60, 'high'),
('Batería', 'Reemplazo de batería', null, 48, 'medium'),
('Alineación y balanceo', 'Alineación de dirección y balanceo de ruedas', 10000, 12, 'medium'),
('Caja de cambios / Transmisión', 'Cambio de aceite de transmisión', 50000, null, 'low');
