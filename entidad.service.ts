import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entidad } from '../models/entidad.model';

@Injectable({
  providedIn: 'root'
})
export class EntidadService {
  private apiUrl = 'http://localhost:8080/api/entidades';

  constructor(private http: HttpClient) { }

  createEntidad(entidad: Entidad): Observable<Entidad> {
    return this.http.post<Entidad>(this.apiUrl, entidad);
  }

  getAllEntidades(): Observable<Entidad[]> {
    return this.http.get<Entidad[]>(this.apiUrl);
  }

  getEntidadById(id: number): Observable<Entidad> {
    return this.http.get<Entidad>(`${this.apiUrl}/${id}`);
  }

  updateEntidad(id: number, entidad: Entidad): Observable<Entidad> {
    return this.http.put<Entidad>(`${this.apiUrl}/${id}`, entidad);
  }

  deleteEntidad(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
