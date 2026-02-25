package com.neo.carassistant.data.database

import androidx.room.*
import com.neo.carassistant.data.model.Car
import kotlinx.coroutines.flow.Flow

@Dao
interface CarDao {
    
    @Query("SELECT * FROM cars ORDER BY updatedAt DESC")
    fun getAllCars(): Flow<List<Car>>
    
    @Query("SELECT * FROM cars WHERE id = :carId")
    suspend fun getCarById(carId: Long): Car?
    
    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insertCar(car: Car): Long
    
    @Update
    suspend fun updateCar(car: Car)
    
    @Delete
    suspend fun deleteCar(car: Car)
    
    @Query("UPDATE cars SET kilometers = :km, updatedAt = :updatedAt WHERE id = :carId")
    suspend fun updateKilometers(carId: Long, km: Int, updatedAt: Long = System.currentTimeMillis())
    
    @Query("UPDATE cars SET notificationsEnabled = :enabled WHERE id = :carId")
    suspend fun updateNotifications(carId: Long, enabled: Boolean)
}
