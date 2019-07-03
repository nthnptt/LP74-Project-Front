import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GetProfilComponent} from './Components/get-profil/get-profil.component';
import {UserAuthComponent} from './Components/user-auth/user-auth.component';
import {HomepageComponent} from './Components/homepage/homepage.component';
import {ProjectComponent} from './Components/project/project.component';
import {EditProjectComponent} from './Components/edit-project/edit-project.component';
import {CollectionsComponent} from './Components/collections/collections.component';

const routes: Routes = [
  {path: 'profil/get', component: GetProfilComponent},
  {path: 'auth', component: UserAuthComponent},
  {path: '', component: HomepageComponent},
  {path: 'projects', component: ProjectComponent},
  {path: 'projects/:id', component: EditProjectComponent},
  {path: 'collection', component: CollectionsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
