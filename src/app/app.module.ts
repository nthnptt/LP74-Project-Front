import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {AuthentificationComponent} from './Components/authentification/authentification.component';
import {GetProfilComponent} from './Components/get-profil/get-profil.component';
import {UserAuthComponent} from './Components/user-auth/user-auth.component';
import {RegisterComponent} from './Components/user-auth/register/register.component';
import {LoginComponent} from './Components/user-auth/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NavigationBarComponent} from './Components/navigation-bar/navigation-bar.component';
import {HomepageComponent} from './Components/homepage/homepage.component';
import {RecentProjectComponent} from './Components/recent-project/recent-project.component';
import {ToolsComponent} from './tools/tools.component';
import {InputCreateProjectComponent} from './Components/project/input-create-project/input-create-project.component';
import {ProjectComponent} from './Components/project/project.component';
import {ConveyerComponent} from './Components/collections/conveyer/conveyer.component';
import {MaterialsComponent} from './Components/collections/materials/materials.component';
import {EngineComponent} from './Components/collections/engine/engine.component';
import {MoreProjectsComponent} from './Components/project/more-projects/more-projects.component';
import {EditProjectComponent} from './Components/edit-project/edit-project.component';
import { CollectionsComponent } from './Components/collections/collections.component';
import { MoreMaterialComponent } from './Components/collections/materials/more-material/more-material.component';
import { InputCreateMaterialComponent } from './Components/collections/materials/input-create-material/input-create-material.component';
import { MoreEngineComponent } from './Components/collections/engine/more-engine/more-engine.component';
import { InputCreateEngineComponent } from './Components/collections/engine/input-create-engine/input-create-engine.component';
import { IncrementButtonComponent } from './increment-button/increment-button.component';
import { ModalMaterialComponent } from './Components/collections/engine/input-create-engine/modal-material/modal-material.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    GetProfilComponent,
    UserAuthComponent,
    RegisterComponent,
    LoginComponent,
    NavigationBarComponent,
    HomepageComponent,
    RecentProjectComponent,
    ToolsComponent,
    InputCreateProjectComponent,
    ProjectComponent,
    ConveyerComponent,
    MaterialsComponent,
    EngineComponent,
    MoreProjectsComponent,
    EditProjectComponent,
    CollectionsComponent,
    MoreMaterialComponent,
    InputCreateMaterialComponent,
    MoreEngineComponent,
    InputCreateEngineComponent,
    IncrementButtonComponent,
    ModalMaterialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
