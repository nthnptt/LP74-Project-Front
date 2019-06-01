import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfilComponent} from './Components/profil/profil.component';
import {GetProfilComponent} from './Components/get-profil/get-profil.component';
import {AuthentificationComponent} from './Components/authentification/authentification.component';

const routes: Routes = [
  { path: 'profil', component: ProfilComponent},
  { path: 'getprofil', component: GetProfilComponent},
  { path: 'auth', component: AuthentificationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
