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
import {MachineComponent} from './Components/collections/machine/machine.component';
import {MoreProjectsComponent} from './Components/project/more-projects/more-projects.component';
import {EditProjectComponent} from './Components/edit-project/edit-project.component';
import {CollectionsComponent} from './Components/collections/collections.component';
import {MoreMaterialComponent} from './Components/collections/materials/more-material/more-material.component';
import {InputCreateMaterialComponent} from './Components/collections/materials/input-create-material/input-create-material.component';
import {MoreMachineComponent} from './Components/collections/machine/more-machine/more-machine.component';
import {InputCreateMachineComponent} from './Components/collections/machine/input-create-machine/input-create-machine.component';
import {IncrementButtonComponent} from './increment-button/increment-button.component';
import {ModalMaterialComponent} from './Components/collections/machine/input-create-machine/modal-material/modal-material.component';
import {WorkspaceComponent} from './Components/edit-project/workspace/workspace.component';
import {WorkspaceService} from './Components/edit-project/workspace/workspace.service';

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
    MachineComponent,
    MoreProjectsComponent,
    EditProjectComponent,
    CollectionsComponent,
    MoreMaterialComponent,
    InputCreateMaterialComponent,
    MoreMachineComponent,
    InputCreateMachineComponent,
    IncrementButtonComponent,
    ModalMaterialComponent,
    WorkspaceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpClientModule, WorkspaceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
