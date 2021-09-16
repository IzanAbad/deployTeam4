import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { FiltradoComponent } from './components/filtrado/filtrado.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HotelInfoComponent } from './components/hotel-info/hotel-info.component';

const routes: Routes = [
  { path: '', redirectTo: 'busqueda', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'filtros/:ciudad', component: FiltradoComponent },
  { path: 'busqueda', component: BusquedaComponent },
<<<<<<< Updated upstream
  { path: 'hotel-info/:name', component: HotelInfoComponent}
=======
  { path: 'hotel-info/:id/:lat/:long', component: HotelInfoComponent}
>>>>>>> Stashed changes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
