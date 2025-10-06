import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-first',
  // Add FormsModule to the imports array
  imports: [FormsModule], 
  templateUrl: './first.html',
  styleUrl: './first.css'
})
export class First {
  public name: string = ''; 
  public email: string = ''; 
  
   names(params:HTMLInputElement) :void{
    this.name = params.value;
  }
}