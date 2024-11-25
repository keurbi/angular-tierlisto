import { Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { Page404Component } from './pages/page404/page404.component';

export const routes: Routes = [
    {path: "Accueil", component: AccueilComponent },
    {path: "Connexion", component: ConnexionComponent },
    {path: "", redirectTo: "Accueil", pathMatch: "full"},
    {path: "**", component: Page404Component},
]; 
