import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ProfilComponent } from './Components/profil/profil.component';
import { AuthentificationComponent } from './Components/authentification/authentification.component';
import { GetProfilComponent } from './Components/get-profil/get-profil.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilComponent,
    AuthentificationComponent,
    GetProfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
