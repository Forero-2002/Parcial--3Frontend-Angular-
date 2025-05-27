import { Component } from '@angular/core';
import { EntidadService } from '../../services/entidad.service';
import { Entidad } from '../../models/entidad.model';

@Component({
  selector: 'app-entidad-create',
  templateUrl: './entidad-create.component.html',
  styleUrls: ['./entidad-create.component.css']
})
export class EntidadCreateComponent {
  entidad: Entidad = {
    id: 0,
    nit: '',
    nombre: ''
  };

  constructor(private entidadService: EntidadService) {}

  onSubmit(): void {
    this.entidadService.createEntidad(this.entidad).subscribe(
      response => {
        alert('Entidad creada exitosamente!');
        this.resetForm();
      },
      error => {
        console.error('Error al crear entidad:', error);
      }
    );
  }

  resetForm(): void {
    this.entidad = {
      id: 0,
      nit: '',
      nombre: ''
    };
  }
}
