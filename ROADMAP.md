# Roadmap — Neo Car Assistant

## 📋 Draft 1: MVP (Mínimo Viable)

El objetivo es una app funcional con las features core.

### Épica 1: Gestión de Vehículos
| ID | Historia | Criterios de aceptación |
|----|----------|------------------------|
| MVP-01 | Como usuario, quiero registrar un auto con marca, modelo y km actuales | Formulario con validación, guardado en DB local |
| MVP-02 | Como usuario, quiero ver la lista de mis autos registrados | Lista con marca/modelo, km actuales |
| MVP-03 | Como usuario, quiero editar los datos de un auto | Actualizar marca, modelo, km |
| MVP-04 | Como usuario, quiero eliminar un auto | Confirmación antes de borrar |
| MVP-05 | Como usuario, quiero actualizar los km de un auto | Input rápido desde la lista |

### Épica 2: Servicios y Alertas
| ID | Historia | Criterios de aceptación |
|----|----------|------------------------|
| MVP-06 | Como usuario, quiero ver los servicios pendientes de un auto | Lista de servicios con fecha/km próximo |
| MVP-07 | Como usuario, quiero registrar que realicé un servicio | Marcar como completado con fecha y km |
| MVP-08 | Como usuario, quiero que la app calcule cuándo toca el próximo servicio | Basado en intervalos estándar por tipo de servicio |
| MVP-09 | Como usuario, quiero recibir una alerta cuando se acerque un servicio | Notificación push X días/km antes |

### Épica 3: Configuración
| ID | Historia | Criterios de aceptación |
|----|----------|------------------------|
| MVP-10 | Como usuario, quiero configurar la frecuencia de recordatorios de km | Semanal, mensual, o desactivado |
| MVP-11 | Como usuario, quiero activar/desactivar notificaciones por auto | Toggle por vehículo |
| MVP-12 | Como usuario, quiero elegir qué tipos de servicio trackear | Checklist de servicios disponibles |

### Tareas técnicas MVP
| ID | Tarea | Descripción |
|----|-------|-------------|
| TECH-01 | Setup proyecto Android + Kotlin + Compose | Estructura base, dependencias |
| TECH-02 | Implementar Room DB | Entidades: Auto, Servicio, RegistroServicio |
| TECH-03 | Implementar WorkManager para notificaciones | Chequeo periódico de alertas |
| TECH-04 | UI: Pantalla principal (lista autos) | Compose + Navigation |
| TECH-05 | UI: Pantalla detalle auto | Servicios pendientes + historial |
| TECH-06 | UI: Pantalla configuración | Preferencias de notificaciones |

---

## 🚀 Draft 2: Versión Pulida (v1.0)

Mejoras sobre el MVP para una experiencia más completa.

### Épica 4: UX Mejorada
| ID | Historia | Criterios de aceptación |
|----|----------|------------------------|
| V1-01 | Como usuario, quiero ver un dashboard con resumen de todos mis autos | Vista rápida de alertas pendientes |
| V1-02 | Como usuario, quiero ver el historial completo de servicios de un auto | Timeline con fechas y km |
| V1-03 | Como usuario, quiero buscar/filtrar en mi historial de servicios | Por tipo, fecha, auto |
| V1-04 | Como usuario, quiero ver estadísticas de gastos por auto | Total gastado, promedio por servicio |

### Épica 5: Personalización
| ID | Historia | Criterios de aceptación |
|----|----------|------------------------|
| V1-05 | Como usuario, quiero agregar servicios personalizados | No solo los predefinidos |
| V1-06 | Como usuario, quiero configurar intervalos personalizados por servicio | Sobreescribir defaults |
| V1-07 | Como usuario, quiero agregar notas/fotos a un servicio | Guardar comprobantes |
| V1-08 | Como usuario, quiero elegir el tema de la app (claro/oscuro) | Preferencia de UI |

### Épica 6: Datos e Integraciones
| ID | Historia | Criterios de aceptación |
|----|----------|------------------------|
| V1-09 | Como usuario, quiero exportar mi historial a PDF/CSV | Backup de datos |
| V1-10 | Como usuario, quiero importar datos desde backup | Restaurar en nuevo dispositivo |
| V1-11 | Como usuario, quiero que la app sugiera intervalos según marca/modelo | Base de datos de mantenimiento por vehículo |
| V1-12 | Como usuario, quiero registrar el costo de cada servicio | Tracking de gastos |

### Épica 7: Notificaciones Avanzadas
| ID | Historia | Criterios de aceptación |
|----|----------|------------------------|
| V1-13 | Como usuario, quiero configurar a qué hora llegan las notificaciones | Horario preferido |
| V1-14 | Como usuario, quiero snooze en las notificaciones | Posponer X días |
| V1-15 | Como usuario, quiero un widget con próximos servicios | Widget home screen |

### Tareas técnicas v1.0
| ID | Tarea | Descripción |
|----|-------|-------------|
| TECH-07 | Implementar DataStore para preferencias | Migrar de SharedPreferences |
| TECH-08 | Implementar export PDF | Librería de generación PDF |
| TECH-09 | Base de datos de intervalos por marca/modelo | JSON o API externa |
| TECH-10 | Widget Android | Glance Compose |
| TECH-11 | Tema dinámico (Material You) | Colores del sistema |
| TECH-12 | Animaciones y transiciones | Polish de UX |

---

## Prioridad sugerida

### MVP (4-6 semanas)
1. TECH-01, TECH-02 → Setup base
2. MVP-01 a MVP-05 → Gestión de autos
3. TECH-04, TECH-05 → UI principal
4. MVP-06 a MVP-09 → Servicios y alertas
5. TECH-03 → Notificaciones
6. MVP-10 a MVP-12, TECH-06 → Configuración

### v1.0 (4-6 semanas adicionales)
1. V1-01 a V1-04 → Dashboard y estadísticas
2. V1-05 a V1-08 → Personalización
3. V1-09 a V1-12 → Datos
4. V1-13 a V1-15 → Notificaciones avanzadas

---

## Servicios predefinidos (MVP)

| Servicio | Intervalo típico |
|----------|-----------------|
| Cambio de aceite | 10,000 km o 6 meses |
| Filtro de aceite | 10,000 km o 6 meses |
| Filtro de aire | 20,000 km o 12 meses |
| Filtro de combustible | 40,000 km o 24 meses |
| Bujías | 30,000 km |
| Correa de distribución | 60,000-100,000 km |
| Líquido de frenos | 40,000 km o 24 meses |
| Pastillas de freno | 30,000-50,000 km |
| Rotación de neumáticos | 10,000 km |
| Alineación y balanceo | 20,000 km |
| Refrigerante | 40,000 km o 24 meses |
