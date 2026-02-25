package com.neo.carassistant.data.model

import androidx.room.Entity
import androidx.room.PrimaryKey

/**
 * Represents a car registered in the app.
 */
@Entity(tableName = "cars")
data class Car(
    @PrimaryKey(autoGenerate = true)
    val id: Long = 0,
    val brand: String,
    val model: String,
    val kilometers: Int,
    val notificationsEnabled: Boolean = true,
    val createdAt: Long = System.currentTimeMillis(),
    val updatedAt: Long = System.currentTimeMillis()
)
