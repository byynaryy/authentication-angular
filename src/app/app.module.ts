import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MesPaiementsComponent } from './mes-paiements/mes-paiements.component';
import { MesInformationtsComponent } from './mes-informationts/mes-informationts.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MesPaiementsComponent,
    MesInformationtsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
