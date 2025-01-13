import { Component, inject, Input } from '@angular/core';
import { JugueteServiceService } from '../../services/juguete-service.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  FormsModule,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-juguete-model',
  standalone: true,
  imports: [],
  templateUrl: './juguete-model.component.html',
  styleUrl: './juguete-model.component.css'
})
export class JugueteModelComponent {
@Input('id') id!: string;
private readonly jugueteService: JugueteServiceService = inject(JugueteServiceService)
private readonly formBuilder: FormBuilder = inject(FormBuilder)
}
