import { Component, inject } from '@angular/core';
import { Juguete } from '../../common/juguete';
import { JugueteServiceService } from '../../services/juguete-service.service';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-juguete-list',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './juguete-list.component.html',
  styleUrl: './juguete-list.component.css',
})
export class JugueteListComponent {
  private readonly jugueteService: JugueteServiceService = inject(
    JugueteServiceService
  );

  juguetes: Juguete[] = [];

  constructor() {
    this.loadJuguetes();
  }

  protected deleteJuguete(juguete: Juguete) {
    if (
      confirm(
        '¿Seguro que quieres eliminar este juguete: ' + juguete.nombre + ' ?'
      )
    ) {
      this.jugueteService.deleteJuguete(juguete._id).subscribe({
        next: (value) => {
          console.log(value);
          this.loadJuguetes();
        },
        error: (err) => {
          console.error(err);
          alert('Error al eliminar el juguete');
        },
      });
    }
  }

  loadJuguetes() {
    this.jugueteService.getJuguetes().subscribe({
      next: (value) => {
        this.juguetes = value.juguetes;
        return this.juguetes;
      },
      error: (err) => {
        return console.error(err);
      },
      complete: () => {
        return console.log('Juguetes cargados con exito');
      },
    });
  }
}
