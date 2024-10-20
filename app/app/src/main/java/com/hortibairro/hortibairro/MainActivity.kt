package com.hortibairro.hortibairro

import com.hortibairro.hortibairro.PagamentoActivity

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
import androidx.compose.ui.text.style.TextAlign
import com.hortibairro.hortibairro.ScannerActivity
import androidx.compose.ui.unit.sp
import androidx.compose.ui.tooling.preview.Preview
import com.hortibairro.hortibairro.ui.theme.HortibairroTheme
import android.util.TypedValue
import android.content.Context
import androidx.appcompat.widget.Toolbar
import androidx.appcompat.app.AppCompatActivity
import android.widget.ImageButton
import androidx.compose.ui.res.stringResource

@OptIn(ExperimentalMaterial3Api::class)
class MainActivity : ComponentActivity() {
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
	    HortibairroTheme {
                Surface(
		    modifier = Modifier.fillMaxSize(),
		    color = Color(238, 230, 217) //a - 10, b - 11, c - 12, d - 13, e - 14, f - 15
		) {
		    Scaffold (
			topBar = {
			    TopAppBar(
				colors = TopAppBarDefaults.topAppBarColors(
				    containerColor = Color(5, 5, 5),
				    titleContentColor = Color.White,
				),
				
				title = {Text("Horti-Bairro")} 
				
			    )
			}
		    ) {
			paddingValues ->
			    Column(
				modifier = Modifier.padding(paddingValues),
				verticalArrangement = Arrangement.spacedBy(16.dp),
				horizontalAlignment = Alignment.CenterHorizontally
			    ) {
				Text(
				    text = "Quem somos?",
				    color = Color.Black,
				    textAlign = TextAlign.Center,
				    modifier = Modifier.padding(top = 20.dp)
				)
				Text(
				    text = stringResource(id = R.string.description),
				    color = Color(97, 173, 127),
				    textAlign = TextAlign.Center,
				    modifier = Modifier.padding(start = 4.dp, end = 4.dp)
				)
				Button(
				    onClick = {
					val intent = Intent(this@MainActivity, ScannerActivity::class.java)
					startActivity(intent)
				    }
				){
				    Text( text = "Pagar", color = Color.White)
				}
			    }
		    }  
		}
	    }
	}
    }
}
