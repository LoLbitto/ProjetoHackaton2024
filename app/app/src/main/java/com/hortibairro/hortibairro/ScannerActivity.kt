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

import androidx.camera.core.Preview
import androidx.camera.view.PreviewView
import androidx.camera.lifecycle.ProcessCameraProvider
import androidx.camera.core.CameraSelector
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.remember
import androidx.compose.ui.viewinterop.AndroidView
import androidx.compose.ui.platform.LocalContext
import androidx.core.content.ContextCompat
import android.Manifest
import android.content.pm.PackageManager

import java.util.concurrent.ExecutorService
import java.util.concurrent.Executors

import androidx.activity.result.contract.ActivityResultContracts
import androidx.appcompat.app.AppCompatActivity
import androidx.activity.compose.rememberLauncherForActivityResult
import android.content.Context
import android.widget.Toast

import android.os.Build
import android.util.Log

import com.hortibairro.hortibairro.databinding.ActivityScannerBinding
import com.hortibairro.hortibairro.ui.theme.HortibairroTheme

@OptIn(ExperimentalMaterial3Api::class)
class ScannerActivity : ComponentActivity() {

    private lateinit var viewBinding: ActivityScannerBinding
    private lateinit var cameraExecutor: ExecutorService

    
    override fun onCreate(savedInstanceState: Bundle?) {
	super.onCreate(savedInstanceState)
	viewBinding = ActivityScannerBinding.inflate(layoutInflater)
	setContentView(viewBinding.root)

	// Request camera permissions
        if (allPermissionsGranted()) {
            startCamera()
        } else {
            requestPermissions()
        }

        viewBinding.imageCaptureButton.setOnClickListener { lerQr() }

	cameraExecutor = Executors.newSingleThreadExecutor()
    }

    private fun lerQr() {
	val intent = Intent(this@ScannerActivity, PagamentoActivity::class.java)
	startActivity(intent)
    }

    private val activityResultLauncher =
	registerForActivityResult(
            ActivityResultContracts.RequestMultiplePermissions())
    { permissions ->
          // Handle Permission granted/rejected
      var permissionGranted = true
      permissions.entries.forEach {
          if (it.key in REQUIRED_PERMISSIONS && it.value == false)
              permissionGranted = false
      }
      if (!permissionGranted) {
          Toast.makeText(baseContext,
			 "Permission request denied",
			 Toast.LENGTH_SHORT).show()
      } else {
          startCamera()
      }
    }

    private fun requestPermissions() {
	activityResultLauncher.launch(REQUIRED_PERMISSIONS)
    }

    private fun allPermissionsGranted() = REQUIRED_PERMISSIONS.all {
        ContextCompat.checkSelfPermission(
            baseContext, it) == PackageManager.PERMISSION_GRANTED
    }

    private fun startCamera() {
	val cameraProviderFuture = ProcessCameraProvider.getInstance(this)
	
	cameraProviderFuture.addListener({
	    // Used to bind the lifecycle of cameras to the lifecycle owner
	    val cameraProvider: ProcessCameraProvider = cameraProviderFuture.get()
	    
	    // Preview
	    val preview = Preview.Builder()
		.build()
		.also {
		    it.setSurfaceProvider(viewBinding.viewFinder.surfaceProvider)
		}

	    // Select back camera as a default
	    val cameraSelector = CameraSelector.DEFAULT_BACK_CAMERA

	    try {
		// Unbind use cases before rebinding
		cameraProvider.unbindAll()

		// Bind use cases to camera
		cameraProvider.bindToLifecycle(
		    this, cameraSelector, preview)

	    } catch(exc: Exception) {
		Log.e(TAG, "Use case binding failed", exc)
	    }

	}, ContextCompat.getMainExecutor(this))
    }

    override fun onDestroy() {
        super.onDestroy()
        cameraExecutor.shutdown()
    }

    companion object {
        private const val TAG = "CameraXApp"
        private const val FILENAME_FORMAT = "yyyy-MM-dd-HH-mm-ss-SSS"
        private val REQUIRED_PERMISSIONS =
            mutableListOf (
                Manifest.permission.CAMERA,
                Manifest.permission.RECORD_AUDIO
            ).apply {
                if (Build.VERSION.SDK_INT <= Build.VERSION_CODES.P) {
                    add(Manifest.permission.WRITE_EXTERNAL_STORAGE)
                }
            }.toTypedArray()
    }
}
