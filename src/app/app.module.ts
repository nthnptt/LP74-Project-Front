import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfilComponent } from './Components/profil/profil.component';
import { AuthentificationComponent } from './Components/authentification/authentification.component';
import { GetProfilComponent } from './Components/get-profil/get-profil.component';
import { UserAuthComponent } from './Components/user-auth/user-auth.component';
import { RegisterComponent } from './Components/user-auth/register/register.component';
import { LoginComponent } from './Components/user-auth/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavigationBarComponent } from './Components/navigation-bar/navigation-bar.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { RecentProjectComponent } from './Components/recent-project/recent-project.component';
import { ToolsComponent } from './tools/tools.component';
import { InputCreateProjectComponent } from './input-create-project/input-create-project.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilComponent,
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
export class AppModule { }
