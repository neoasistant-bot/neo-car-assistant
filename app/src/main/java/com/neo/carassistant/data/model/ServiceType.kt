package com.neo.carassistant.data.model

/**
 * Predefined service types with default intervals.
 */
enum class ServiceType(
    val displayName: String,
    val defaultKmInterval: Int,
    val defaultMonthsInterval: Int
) {
    OIL_CHANGE("Cambio de aceite", 10000, 6),
    OIL_FILTER("Filtro de aceite", 10000, 6),
    AIR_FILTER("Filtro de aire", 20000, 12),
    FUEL_FILTER("Filtro de combustible", 40000, 24),
    SPARK_PLUGS("Bujías", 30000, 0),
    TIMING_BELT("Correa de distribución", 80000, 0),
    BRAKE_FLUID("Líquido de frenos", 40000, 24),
    BRAKE_PADS("Pastillas de freno", 40000, 0),
    TIRE_ROTATION("Rotación de neumáticos", 10000, 0),
    ALIGNMENT("Alineación y balanceo", 20000, 0),
    COOLANT("Refrigerante", 40000, 24)
}
