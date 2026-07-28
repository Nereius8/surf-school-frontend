import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SurfboardService } from '../../core/services/surfboard.service';
import { Surfboard } from '../../shared/models/surfboard';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rental',
  imports: [FormsModule, CommonModule],
  templateUrl: './rental.component.html',
  styleUrl: './rental.component.css'
})
export class RentalComponent {

  public boardService = inject(SurfboardService);
  public defaultBoardImage = 'tablas.jpg';
  
  // Lógica rescatada del Formulario
  public showForm = signal<boolean>(false);
  public newBoard: Surfboard = this.resetForm();

  constructor() {
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
        error: (err) => console.error('Error saving surfboard:', err)
      });
    }
  }

  onDelete(id: number): void {
    if (confirm('Are you sure you want to remove this surfboard from the inventory?')) {
      this.boardService.deleteSurfboard(id).subscribe({
        error: (err) => console.error('Error deleting surfboard:', err)
      });
    }
  }

  private resetForm(): Surfboard {
    return {
      model: '',
      type: 'Softboard Blue/Orange',
      size: '6\'0"',
      rentalPricePerHour: 12.0,
      isAvailable: true
    };
  }
}
