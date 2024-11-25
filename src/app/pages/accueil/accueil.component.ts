import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss',
})
export class AccueilComponent {
  compteur = 0;

  listeCategories = ['S', 'A', 'B', 'D', 'E'];

  onClick() {
    this.compteur++;
  }
}
