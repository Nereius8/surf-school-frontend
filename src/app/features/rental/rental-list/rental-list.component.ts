import { CommonModule } from '@angular/common';
import { Component, OnInit, inject} from '@angular/core';
import { SurfboardService } from '../../../services/surfboard.service';

@Component({
  selector: 'app-rental-list',
  imports: [CommonModule],
  templateUrl: './rental-list.component.html',
  styleUrl: './rental-list.component.css'
})
export class RentalListComponent implements OnInit {
  boardService = inject(SurfboardService);

  ngOnInit(): void {
    this.boardService.loadSurfboards();
  }

  onDelete(id: number): void {
    if (confirm('¿Seguro que deseas dar de baja esta tabla del inventario?')) {
      this.boardService.deleteSurfboard(id).subscribe({
        error: (err) => console.error('Error al eliminar tabla:', err)
      });
    }
  }

}
