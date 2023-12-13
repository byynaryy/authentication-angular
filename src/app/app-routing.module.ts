import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MesInformationtsComponent } from './mes-informationts/mes-informationts.component';
import { MesPaiementsComponent } from './mes-paiements/mes-paiements.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    
    { path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: "home", component: AccueilComponent},
    {path: "informations", component: MesInformationtsComponent},
    {path: "paiements", component: MesPaiementsComponent},
    {path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
