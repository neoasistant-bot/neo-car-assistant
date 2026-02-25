package com.neo.carassistant.ui.viewmodel

import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import androidx.lifecycle.viewModelScope
import com.neo.carassistant.data.model.Car
import com.neo.carassistant.data.repository.CarRepository
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.SharingStarted
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.stateIn
import kotlinx.coroutines.launch

data class CarFormState(
    val brand: String = "",
    val model: String = "",
    val kilometers: String = "",
    val isEditing: Boolean = false,
    val editingCarId: Long? = null
)

class CarViewModel(private val repository: CarRepository) : ViewModel() {
    
    val cars: StateFlow<List<Car>> = repository.allCars
        .stateIn(viewModelScope, SharingStarted.WhileSubscribed(5000), emptyList())
    
    private val _formState = MutableStateFlow(CarFormState())
    val formState: StateFlow<CarFormState> = _formState
    
    private val _showDialog = MutableStateFlow(false)
    val showDialog: StateFlow<Boolean> = _showDialog
    
    fun showAddDialog() {
        _formState.value = CarFormState()
        _showDialog.value = true
    }
    
    fun showEditDialog(car: Car) {
        _formState.value = CarFormState(
            brand = car.brand,
            model = car.model,
            kilometers = car.kilometers.toString(),
            isEditing = true,
            editingCarId = car.id
        )
        _showDialog.value = true
    }
    
    fun hideDialog() {
        _showDialog.value = false
        _formState.value = CarFormState()
    }
    
    fun updateBrand(value: String) {
        _formState.value = _formState.value.copy(brand = value)
    }
    
    fun updateModel(value: String) {
        _formState.value = _formState.value.copy(model = value)
    }
    
    fun updateKilometers(value: String) {
        // Only allow numbers
        if (value.isEmpty() || value.all { it.isDigit() }) {
            _formState.value = _formState.value.copy(kilometers = value)
        }
    }
    
    fun saveCar() {
        val state = _formState.value
        if (state.brand.isBlank() || state.model.isBlank() || state.kilometers.isBlank()) {
            return
        }
        
        viewModelScope.launch {
            val car = Car(
                id = state.editingCarId ?: 0,
                brand = state.brand.trim(),
                model = state.model.trim(),
                kilometers = state.kilometers.toIntOrNull() ?: 0
            )
            
            if (state.isEditing && state.editingCarId != null) {
                repository.updateCar(car)
            } else {
                repository.insertCar(car)
            }
            
            hideDialog()
        }
    }
    
    fun deleteCar(car: Car) {
        viewModelScope.launch {
            repository.deleteCar(car)
        }
    }
    
    fun updateCarKilometers(car: Car, newKm: Int) {
        viewModelScope.launch {
            repository.updateKilometers(car.id, newKm)
        }
    }
}

class CarViewModelFactory(private val repository: CarRepository) : ViewModelProvider.Factory {
    override fun <T : ViewModel> create(modelClass: Class<T>): T {
        if (modelClass.isAssignableFrom(CarViewModel::class.java)) {
            @Suppress("UNCHECKED_CAST")
            return CarViewModel(repository) as T
        }
        throw IllegalArgumentException("Unknown ViewModel class")
    }
}
