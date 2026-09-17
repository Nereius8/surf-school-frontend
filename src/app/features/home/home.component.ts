import { Component, inject, ViewEncapsulation } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FooterComponent } from '../../shared/component/footer/footer.component';
import { TranslatePipe } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, FooterComponent, TranslatePipe, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  encapsulation: ViewEncapsulation.None
  
})
export class HomeComponent {
  private router = inject(Router);

  heroImage = 'tablas.jpg';

  navigateToRental(): void {
    this.router.navigate(['/rental']);
  }
}
