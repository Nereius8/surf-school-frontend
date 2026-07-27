import { Component, inject } from '@angular/core';
import { SurfboardService } from '../../../core/services/surfboard.service';
import { RentalFormComponent } from '../rental-form/rental-form.component';

@Component({
  selector: 'app-rental-list',
  standalone: true,
  imports: [ RentalFormComponent],
  templateUrl: './rental-list.component.html',
  styleUrl: './rental-list.component.css'
})
export class RentalListComponent {
  public boardService = inject(SurfboardService);
  public defaultBoardImage = 'tablas.jpg';

  constructor() {
    this.boardService.loadSurfboards();
  }

  onDelete(id: number): void {
    if (confirm('Are you sure you want to remove this surfboard from the inventory?')) {
      this.boardService.deleteSurfboard(id).subscribe({
        error: (err) => console.error('Error deleting surfboard:', err)
      });
    }
  }
}