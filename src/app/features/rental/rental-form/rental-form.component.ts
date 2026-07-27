import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SurfboardService } from '../../../core/services/surfboard.service';
import { Surfboard } from '../../../shared/models/surfboard';


@Component({
  selector: 'app-rental-form',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './rental-form.component.html',
  styleUrl: './rental-form.component.css'
})
export class RentalFormComponent {
  public boardService = inject(SurfboardService);
  
  public showForm = signal<boolean>(false);
  public newBoard: Surfboard = this.resetForm();

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