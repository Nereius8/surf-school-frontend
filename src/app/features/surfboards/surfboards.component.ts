import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SurfboardService } from '../../services/surfboard.service';
import { Surfboard } from '../../models/surfboard';

@Component({
  selector: 'app-surfboards',
  imports: [CommonModule, FormsModule],
  templateUrl: './surfboards.component.html',
  styleUrl: './surfboards.component.css'
})
export class SurfboardsComponent implements OnInit{

  boardService = inject(SurfboardService);
  
  showForm = signal<boolean>(false);
  newBoard: Surfboard = this.resetForm();

  ngOnInit(): void {
    this.boardService.loadSurfboards();
  }

  toggleForm(): void {
    this.showForm.update(val => !val);
  }

  onSubmit(): void {
    if (this.newBoard.model && this.newBoard.size) {
      this.boardService.createSurfboard(this.newBoard).subscribe({
        next: () => {
          this.newBoard = this.resetForm();
          this.showForm.set(false);
        },
        error: (err) => console.error('Error al guardar tabla:', err)
      });
    }
  }

  onDelete(id: number): void {
    if (confirm('¿Seguro que deseas dar de baja esta tabla del inventario?')) {
      this.boardService.deleteSurfboard(id).subscribe({
        error: (err) => console.error('Error al eliminar tabla:', err)
      });
    }
  }

  private resetForm(): Surfboard {
    return {
      model: '',
      type: 'Softboard',
      size: 7.2,
      rentalPricePerHour: 12.0,
      isAvailable: true
    };
  }

}
