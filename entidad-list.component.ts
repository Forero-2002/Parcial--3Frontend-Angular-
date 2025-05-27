import { Component, OnInit } from '@angular/core';
import { EntidadService } from '../../services/entidad.service';
import { Entidad } from '../../models/entidad.model';

@Component({
  selector: 'app-entidad-list',
  templateUrl: './entidad-list.component.html',
  styleUrls: ['./entidad-list.component.css']
})
export class EntidadListComponent implements OnInit {
  entidades: Entidad[] = [];

  constructor(private entidadService: EntidadService) {}

  ngOnInit(): void {
    this.loadEntidades();
  }

  loadEntidades(): void {
    this.entidadService.getAllEntidades().subscribe(
      data => {
        this.entidades = data;
      },
      error => {
        console.error('Error al cargar entidades:', error);
      }
    );
  }

  deleteEntidad(id: number): void {
    if (confirm('¿Está seguro de eliminar esta entidad?')) {
      this.entidadService.deleteEntidad(id).subscribe(
        () => {
          this.entidades = this.entidades.filter(e => e.id !== id);
          alert('Entidad eliminada exitosamente');
        },
        error => {
          console.error('Error al eliminar entidad:', error);
        }
      );
    }
  }
}
