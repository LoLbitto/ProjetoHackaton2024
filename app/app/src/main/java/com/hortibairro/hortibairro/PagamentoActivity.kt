package com.hortibairro.hortibairro

import com.hortibairro.hortibairro.ui.theme.HortibairroTheme
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent

import androidx.compose.ui.unit.dp
import androidx.compose.ui.graphics.Color
import androidx.compose.material3.*
import androidx.compose.ui.Alignment
import androidx.compose.foundation.layout.*
import androidx.compose.ui.text.style.TextAlign
import android.os.Bundle
import androidx.compose.ui.Modifier
import android.content.Intent
import io.ktor.client.*
import io.ktor.client.engine.cio.*
import io.ktor.client.request.*
import io.ktor.http.*
import io.ktor.client.call.*
import kotlinx.coroutines.*
import io.ktor.client.statement.HttpResponse
import java.net.URL
import android.net.Uri


@OptIn(ExperimentalMaterial3Api::class)
class PagamentoActivity : ComponentActivity() {
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

	val intent = Intent(Intent.ACTION_VIEW, Uri.parse("http://192.168.18.8:5000/confirm?ispago=Sim"))
        startActivity(intent)
	
        setContent{
	    HortibairroTheme{
		Column(
		    modifier = Modifier.fillMaxWidth().fillMaxHeight(),
		    verticalArrangement = Arrangement.Center,
		    horizontalAlignment = Alignment.CenterHorizontally
		) {
		    Text(
			text = "Pagamento realizado!",
			//fontSize = 30.dp,
			color = Color(97, 173, 127),
			textAlign = TextAlign.Center
		    ) 

		    Button( onClick = {
				val intent = Intent(this@PagamentoActivity, MainActivity::class.java)
				startActivity(intent)
		    }) {
			Text(
			    text = "Voltar",
			    color = Color.White
			)
		    }
		}
	    }
	}
    }
}

