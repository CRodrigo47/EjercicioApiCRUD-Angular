import { Component, inject } from '@angular/core';
import { Juguete } from '../../common/juguete';
import { JugueteServiceService } from '../../services/juguete-service.service';

@Component({
  selector: 'app-juguete-list',
  standalone: true,
  imports: [],
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

  loadJuguetes() {}
}
