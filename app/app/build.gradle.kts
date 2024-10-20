plugins {
    alias(libs.plugins.android.application)
    alias(libs.plugins.kotlin.android)
    //id("com.android.application")  version "8.1.1" apply false
    //kotlin("android") version "1.9.21" apply false
    kotlin("kapt") //version "1.9.21" apply false
}

android {
    namespace = "com.hortibairro.hortibairro"
    compileSdk = 34

    defaultConfig {
        applicationId = "com.hortibairro.hortibairro"
        minSdk = 21
        targetSdk = 34
        versionCode = 1
        versionName = "1.0"

        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
        vectorDrawables {
            useSupportLibrary = true
        }
    }

    buildFeatures {
	dataBinding = true
	viewBinding = true
	compose = true
    }

    kapt {
        correctErrorTypes = true
	arguments {
            arg("dagger.gradle.incremental", "true")
	}
    }

    signingConfigs {
	create("release") {
	    storeFile = file("${project.property("MyProject.signing")}.keystore")
	    keyAlias = "hortibairro"
	    keyPassword = "sslpkhackathon"
	    storePassword = "sslpkhackathon"
	}
    }

    buildTypes {
        getByName("release") {
	    signingConfig = signingConfigs.getByName("release")
            isMinifyEnabled = false
            proguardFiles(
                getDefaultProguardFile("proguard-android-optimize.txt"),
                "proguard-rules.pro"
            )
        }
    }

    kotlinOptions {
        jvmTarget = "1.8"
    }
    
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_1_8
        targetCompatibility = JavaVersion.VERSION_1_8
    }
   
    composeOptions {
        kotlinCompilerExtensionVersion = "1.5.7"
    }
    packaging {
        resources {
            excludes += "/META-INF/{AL2.0,LGPL2.1}"
        }
    }
}

dependencies {

    implementation(platform("androidx.compose:compose-bom:2023.10.00"))

    implementation ("androidx.constraintlayout:constraintlayout:2.1.4")
    
    implementation ("androidx.compose.material:material:1.5.7")
    implementation ("androidx.compose.ui:ui:1.5.7")
    implementation ("androidx.camera:camera-core:1.3.4")
    implementation ("androidx.camera:camera-camera2:1.3.4")
    implementation ("androidx.camera:camera-lifecycle:1.3.4")
    implementation ("androidx.camera:camera-view:1.2.0-alpha27")
    implementation ("androidx.activity:activity")
    implementation("androidx.compose.ui:ui-tooling:1.5.7")
    implementation("androidx.compose.runtime:runtime:1.7.0")
    implementation ("androidx.compose.material3:material3:1.1.0-alpha02")
    implementation ("androidx.appcompat:appcompat:1.7.0")

    //kapt ("com.android.databinding:compiler:3.1.4")
    implementation ("org.jetbrains.kotlin:kotlin-stdlib:1.9.21")
    implementation ("androidx.databinding:databinding-runtime:8.7.0")
    
    //implementation ("org.jetbrains.kotlin:kotlin-stdlib:1.9.0")
    //implementation ("org.jetbrains.kotlin:kotlin-reflect:1.7.10")
    //implementation ("org.jetbrains.kotlin:kotlin-gradle-plugin:1.9.21")

    //implementation ("org.jetbrains.kotlin:kotlin-stdlib-jdk17:1.9.23")
    //implementation ("org.jetbrains.kotlin:kotlin-stdlib:1.8.0")
    
    implementation("androidx.databinding:databinding-runtime:VERSION")    
    
    implementation(libs.androidx.core.ktx)
    implementation(libs.androidx.lifecycle.runtime.ktx)
    implementation(libs.androidx.activity.compose)
    implementation(platform(libs.androidx.compose.bom))
    implementation(libs.androidx.ui)
    implementation(libs.androidx.ui.graphics)
    implementation(libs.androidx.ui.tooling.preview)
    testImplementation(libs.junit)
    androidTestImplementation(libs.androidx.junit)
    androidTestImplementation(libs.androidx.espresso.core)
    androidTestImplementation(platform(libs.androidx.compose.bom))
    androidTestImplementation(libs.androidx.ui.test.junit4)
    debugImplementation(libs.androidx.ui.tooling)
    debugImplementation(libs.androidx.ui.test.manifest)
}
