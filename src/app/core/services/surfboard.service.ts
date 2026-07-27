import { Injectable, inject, signal } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Surfboard } from '../../shared/models/surfboard';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SurfboardService {
private http = inject(HttpClient);
private apiUrl = 'http://localhost:8080/api/surfboards';

  constructor() { }

  private _surfboards = signal<Surfboard[]>([]);
  public surfboards = this._surfboards.asReadonly();

  loadSurfboards(): void {
    this.http.get<Surfboard[]>(this.apiUrl).subscribe({
      next: (data) => this._surfboards.set(data),
      error: (err) => console.error('Error loading surfboards:', err)
    });
  }

  createSurfboard(surfboard: Surfboard): Observable<Surfboard> {
    return this.http.post<Surfboard>(this.apiUrl, surfboard).pipe(
      tap((newBoard) => {
        this._surfboards.update((current) => [...current, newBoard]);
      })
    );
  }

  deleteSurfboard(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(() => {
        this._surfboards.update((current) => current.filter(b => b.id !== id));
      })
    );
  }
 
  
}
