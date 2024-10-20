package com.hortibairro.hortibairro

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding

import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.ui.unit.dp
import androidx.compose.ui.Alignment

import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.runtime.Composable

import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember

import android.content.Intent

import androidx.compose.ui.tooling.preview.Preview
import com.hortibairro.hortibairro.ui.theme.HortibairroTheme

@OptIn(ExperimentalMaterial3Api::class)
class MainActivity : ComponentActivity() {
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            HortibairroTheme {
                Surface(
		    modifier = Modifier.fillMaxSize(),
		    color = MaterialTheme.colorScheme.background
		) {
		    Scaffold (
			topBar = {
			    TopAppBar(
				colors = TopAppBarDefaults.topAppBarColors(
				    containerColor = Color.Green,
				    titleContentColor = MaterialTheme.colorScheme.primary,
				),
				title = {
				    Text("teste de barra superior")
				    
				}
			    )
			}
		    ) {
			paddingValues ->
			    Column(
				modifier = Modifier.padding(paddingValues),
				verticalArrangement = Arrangement.spacedBy(16.dp),
			    ) {
				Text(
				    text = "Meu deus finalmente foi"
				)
				Botao()
				
			    }
		    }  
		}
            }
	    
        }
    }

    @Composable
    fun Botao() {
	Button(
	    onClick = {
		val intent = Intent(this@MainActivity, ScannerActivity::class.java)
		startActivity(intent)
	    }
	) {
	    Text(
		text = "botão"
	    )
	}
    }
}
