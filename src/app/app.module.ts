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
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProfilComponent,
    AuthentificationComponent,
    GetProfilComponent,
    UserAuthComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
