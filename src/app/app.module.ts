import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiltradoComponent } from './components/filtrado/filtrado.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
<<<<<<< Updated upstream
=======
import { HotelInfoComponent } from './components/hotel-info/hotel-info.component';
>>>>>>> Stashed changes

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
<<<<<<< Updated upstream
import { HotelInfoComponent } from './components/hotel-info/hotel-info.component';
=======
import { TelefonoPipe } from './telefono.pipe';
import { LetrasPipe } from './letras.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    FiltradoComponent,
    BusquedaComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
<<<<<<< Updated upstream
    HotelInfoComponent
=======
    HotelInfoComponent,
    TelefonoPipe,
    LetrasPipe
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
<<<<<<< Updated upstream
    GoogleMapsModule
=======
    GoogleMapsModule,
    NgbModule
>>>>>>> Stashed changes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
