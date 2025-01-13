import { Component, inject } from '@angular/core';
import { Juguete } from '../../common/juguete';
import { JugueteServiceService } from '../../services/juguete-service.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-juguete-list',
  standalone: true,
  imports: [RouterLink],
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

  loadJuguetes() {
    this.jugueteService.getJuguetes().subscribe(
      {next: value => {
        this.juguetes = value.juguetes
        return this.juguetes
      },
    error: err => {
      return console.error(err)
    },
    complete: () =>{
      return console.log("Juguetes cargados con exito")
    }}
      
    )
  }
}
