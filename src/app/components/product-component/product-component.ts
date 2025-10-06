import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './product-component.html',
  styleUrl: './product-component.css'
})
export class ProductComponent {
  form: FormGroup;
  products: any[] = [];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
      rate: ['', Validators.required]
    });
  }

  display() {
    // ✅ check form validity first
    if (this.form.valid) {
      // ✅ push form values into products array
      this.products.push(this.form.value);

      // ✅ clear the form after adding
      this.form.reset();
    }
  }
}
