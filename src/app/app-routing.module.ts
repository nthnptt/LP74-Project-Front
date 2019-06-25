import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfilComponent} from './Components/profil/profil.component';
import {GetProfilComponent} from './Components/get-profil/get-profil.component';
import {AuthentificationComponent} from './Components/authentification/authentification.component';
import {UserAuthComponent} from './Components/user-auth/user-auth.component';
import {HomepageComponent} from './Components/homepage/homepage.component';
import {ProjectComponent} from './project/project.component';

const routes: Routes = [
  // { path: 'profil', component: ProfilComponent},
  // { path: 'getprofil', component: GetProfilComponent},
  { path: 'auth', component: UserAuthComponent},
  { path: '', component: HomepageComponent},
  { path: 'projects', component: ProjectComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
