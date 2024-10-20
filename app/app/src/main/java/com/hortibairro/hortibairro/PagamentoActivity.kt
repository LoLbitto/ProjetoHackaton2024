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

@OptIn(ExperimentalMaterial3Api::class)
class PagamentoActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
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
