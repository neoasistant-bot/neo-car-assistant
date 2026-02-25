package com.neo.carassistant

import android.app.Application
import android.app.NotificationChannel
import android.app.NotificationManager
import android.os.Build
import com.neo.carassistant.data.database.AppDatabase
import com.neo.carassistant.data.repository.CarRepository

class CarAssistantApp : Application() {
    
    val database by lazy { AppDatabase.getDatabase(this) }
    val repository by lazy { CarRepository(database.carDao()) }
    
    override fun onCreate() {
        super.onCreate()
        createNotificationChannel()
    }
    
    private fun createNotificationChannel() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val channel = NotificationChannel(
                NOTIFICATION_CHANNEL_ID,
                "Recordatorios de Servicio",
                NotificationManager.IMPORTANCE_DEFAULT
            ).apply {
                description = "Notificaciones sobre servicios pendientes de tus autos"
            }
            
            val notificationManager = getSystemService(NotificationManager::class.java)
            notificationManager.createNotificationChannel(channel)
        }
    }
    
    companion object {
        const val NOTIFICATION_CHANNEL_ID = "service_reminders"
    }
}
