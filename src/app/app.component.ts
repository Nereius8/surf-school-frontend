import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SurfboardsComponent } from './features/surfboards/surfboards.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SurfboardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
