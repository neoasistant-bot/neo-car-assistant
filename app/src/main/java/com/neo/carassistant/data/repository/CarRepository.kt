package com.neo.carassistant.data.repository

import com.neo.carassistant.data.database.CarDao
import com.neo.carassistant.data.model.Car
import kotlinx.coroutines.flow.Flow

class CarRepository(private val carDao: CarDao) {
    
    val allCars: Flow<List<Car>> = carDao.getAllCars()
    
    suspend fun getCarById(id: Long): Car? = carDao.getCarById(id)
    
    suspend fun insertCar(car: Car): Long = carDao.insertCar(car)
    
    suspend fun updateCar(car: Car) = carDao.updateCar(car)
    
    suspend fun deleteCar(car: Car) = carDao.deleteCar(car)
    
    suspend fun updateKilometers(carId: Long, km: Int) = carDao.updateKilometers(carId, km)
    
    suspend fun toggleNotifications(carId: Long, enabled: Boolean) = 
        carDao.updateNotifications(carId, enabled)
}
