import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MesInformationtsComponent } from './mes-informationts/mes-informationts.component';
import { MesPaiementsComponent } from './mes-paiements/mes-paiements.component';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [
    {path: "", component: AccueilComponent},
    {path: "informations", component: MesInformationtsComponent},
    {path: "paiements", component: MesPaiementsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
