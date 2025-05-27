import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  constructor(){
    calculatorForm: new FormGroup({
      number1: new FormControl('', Validators.required),
      number2: new FormControl('', Validators.required),
      operation: new FormControl('', Validators.required)
    })
  }
}
