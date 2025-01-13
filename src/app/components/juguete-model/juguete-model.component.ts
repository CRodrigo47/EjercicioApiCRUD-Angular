import { Juguete } from './../../common/juguete';
import { Component, inject, Input, OnInit } from '@angular/core';
import { JugueteServiceService } from '../../services/juguete-service.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  FormsModule,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-juguete-model',
  standalone: true,
  imports: [ReactiveFormsModule, NgbModule],
  providers: [NgbActiveModal],
  templateUrl: './juguete-model.component.html',
  styleUrl: './juguete-model.component.css',
})
export class JugueteModelComponent implements OnInit {
  @Input('id') id!: string;
  cargandoFormulario = false

  private readonly router = inject(Router);
  activeModal = inject(NgbActiveModal);
  private readonly jugueteService: JugueteServiceService = inject(
    JugueteServiceService
  );
  private readonly formBuilder: FormBuilder = inject(FormBuilder);

  formJuguete: FormGroup = this.formBuilder.group({
    _id: [''],
    nombre: [''],
    imagen: [''],
    categoria: [''],
    edadMinima: [],
    precio: [],
  });

  get nombre(): any {
    return this.formJuguete.get('nombre');
  }
  get imagen(): any {
    return this.formJuguete.get('imagen');
  }
  get categoria(): any {
    return this.formJuguete.get('categoria');
  }
  get edadMinima(): any {
    return this.formJuguete.get('edadMinima');
  }
  get precio(): any {
    return this.formJuguete.get('precio');
  }

  onSubmit() {
    if (this.id) {
      this.jugueteService
        .updateJuguete(this.formJuguete.getRawValue())
        .subscribe({
          next: (value) => {
            console.log(value);
          },
          complete: () => {
            console.log('Updated');
            this.activeModal.dismiss();
            this.router.navigateByUrl('/juguetes/list');
          },
          error: (err) => console.error(err),
        });
    } else {
      this.jugueteService.addJuguete(this.formJuguete.getRawValue()).subscribe({
        next: (value) => {
          console.log(value);
        },
        complete: () => {
          console.log('Created');
          this.router.navigateByUrl('/juguetes/list');
        },
        error: (err) => console.error(err),
      });
    }
  }

  ngOnInit() {
    if (this.id){
      this.jugueteService.getJuguete(this.id).subscribe({
        next: (value) => {
          this.formJuguete.setValue(value);
          this.cargandoFormulario = true
        },
        error: (err) => console.error(err),
      });
    }
    else{
      this.formJuguete.reset();
      this.cargandoFormulario=true
    } 
  }
}
