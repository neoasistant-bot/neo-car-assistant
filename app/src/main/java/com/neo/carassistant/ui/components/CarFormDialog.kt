package com.neo.carassistant.ui.components

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.unit.dp
import androidx.compose.ui.window.Dialog
import com.neo.carassistant.ui.viewmodel.CarFormState

@Composable
fun CarFormDialog(
    formState: CarFormState,
    onBrandChange: (String) -> Unit,
    onModelChange: (String) -> Unit,
    onKilometersChange: (String) -> Unit,
    onSave: () -> Unit,
    onDismiss: () -> Unit
) {
    Dialog(onDismissRequest = onDismiss) {
        Card(
            modifier = Modifier.fillMaxWidth(),
            elevation = CardDefaults.cardElevation(defaultElevation = 8.dp)
        ) {
            Column(
                modifier = Modifier.padding(24.dp)
            ) {
                Text(
                    text = if (formState.isEditing) "Editar Auto" else "Agregar Auto",
                    style = MaterialTheme.typography.headlineSmall
                )
                
                Spacer(modifier = Modifier.height(24.dp))
                
                OutlinedTextField(
                    value = formState.brand,
                    onValueChange = onBrandChange,
                    label = { Text("Marca") },
                    placeholder = { Text("Ej: Toyota, Ford, VW...") },
                    modifier = Modifier.fillMaxWidth(),
                    singleLine = true
                )
                
                Spacer(modifier = Modifier.height(16.dp))
                
                OutlinedTextField(
                    value = formState.model,
                    onValueChange = onModelChange,
                    label = { Text("Modelo") },
                    placeholder = { Text("Ej: Corolla, Ranger, Gol...") },
                    modifier = Modifier.fillMaxWidth(),
                    singleLine = true
                )
                
                Spacer(modifier = Modifier.height(16.dp))
                
                OutlinedTextField(
                    value = formState.kilometers,
                    onValueChange = onKilometersChange,
                    label = { Text("Kilómetros") },
                    placeholder = { Text("Ej: 50000") },
                    modifier = Modifier.fillMaxWidth(),
                    singleLine = true,
                    keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Number),
                    suffix = { Text("km") }
                )
                
                Spacer(modifier = Modifier.height(24.dp))
                
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.End
                ) {
                    TextButton(onClick = onDismiss) {
                        Text("Cancelar")
                    }
                    Spacer(modifier = Modifier.width(8.dp))
                    Button(
                        onClick = onSave,
                        enabled = formState.brand.isNotBlank() && 
                                  formState.model.isNotBlank() && 
                                  formState.kilometers.isNotBlank()
                    ) {
                        Text("Guardar")
                    }
                }
            }
        }
    }
}
