import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SurfboardService } from '../../../services/surfboard.service'; 

@Component({
  selector: 'app-rental-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './rental-form.component.html',
  styleUrl: './rental-form.component.css'
})
export class RentalFormComponent {
  private fb = inject(FormBuilder);
  private surfboardService = inject(SurfboardService);

  surfboardForm: FormGroup = this.fb.group({
    model: ['', [Validators.required, Validators.minLength(3)]],
    type: ['Softboard', [Validators.required]],
    size: [8.0, [Validators.required, Validators.min(4)]],
    rentalPricePerHour: [15, [Validators.required, Validators.min(1)]],
    isAvailable: [true]
  });

  onSubmit(): void {
    if (this.surfboardForm.invalid) {
      this.surfboardForm.markAllAsTouched(); // Muestra los errores visuales si intentan enviar vacío
      return;
    }

    // Extraemos los datos del formulario
    const newBoard = this.surfboardForm.value;

    // Enviamos al backend de Spring Boot
    this.surfboardService.createSurfboard(newBoard).subscribe({
      next: (savedBoard) => {
        console.log('Board successfully saved!', savedBoard);
        this.surfboardForm.reset({
          type: 'Softboard',
          size: 8.0,
          rentalPricePerHour: 15,
          isAvailable: true
        }); // Reseteamos el formulario con valores por defecto cómodos
      },
      error: (err) => {
        console.error('Error saving surfboard:', err);
      }
    });
  }
}
