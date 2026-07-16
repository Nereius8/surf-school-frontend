import { Injectable, inject, signal } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Surfboard } from '../models/surfboard';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SurfboardService {
private http = inject(HttpClient);
private apiUrl = 'http://localhost:8080/api/surfboards';

  constructor() { }

  surfboards = signal<Surfboard[]>([]);

  loadSurfboards(): void {
    this.http.get<Surfboard[]>(this.apiUrl).subscribe({
      next: (data) => this.surfboards.set(data),
      error: (err) => console.error('Error cargando tablas de surf:', err)
    });
  }

  createSurfboard(surfboard: Surfboard): Observable<Surfboard> {
    return this.http.post<Surfboard>(this.apiUrl, surfboard).pipe(
      tap((newBoard) => {
        this.surfboards.update((current) => [...current, newBoard]);
      })
    );
  }

  deleteSurfboard(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(() => {
        this.surfboards.update((current) => current.filter(b => b.id !== id));
      })
    );
  }
 
  
}
