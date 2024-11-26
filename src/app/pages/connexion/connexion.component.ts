import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.scss',
})
export class ConnexionComponent {
  formBuilder = inject(FormBuilder);

  formulaire = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  onConnexion() {
    if (this.formulaire.valid) {
      console.log(this.formulaire.value);
    }
  }
}
