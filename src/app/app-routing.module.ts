import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GetProfilComponent} from './Components/get-profil/get-profil.component';
import {AuthentificationComponent} from './Components/authentification/authentification.component';
import {UserAuthComponent} from './Components/user-auth/user-auth.component';
import {HomepageComponent} from './Components/homepage/homepage.component';
import {ProjectComponent} from './project/project.component';
import {EditProjectComponent} from './edit-project/edit-project.component';

const routes: Routes = [
  { path: 'profil/get', component: GetProfilComponent},
  { path: 'auth', component: UserAuthComponent},
  { path: '', component: HomepageComponent},
  { path: 'projects', component: ProjectComponent},
  { path: 'projects/:id', component: EditProjectComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
