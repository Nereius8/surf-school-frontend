import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private router = inject(Router);

  heroImage = 'tabalas.jpg';

  navigateToRental(): void {
    this.router.navigate(['/rental']);
  }
}
