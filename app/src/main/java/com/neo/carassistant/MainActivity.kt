package com.neo.carassistant

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.ui.Modifier
import androidx.lifecycle.viewmodel.compose.viewModel
import com.neo.carassistant.ui.screens.HomeScreen
import com.neo.carassistant.ui.theme.NeoCarAssistantTheme
import com.neo.carassistant.ui.viewmodel.CarViewModel
import com.neo.carassistant.ui.viewmodel.CarViewModelFactory

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        
        val app = application as CarAssistantApp
        
        setContent {
            NeoCarAssistantTheme {
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    val viewModel: CarViewModel = viewModel(
                        factory = CarViewModelFactory(app.repository)
                    )
                    HomeScreen(viewModel = viewModel)
                }
            }
        }
    }
}
