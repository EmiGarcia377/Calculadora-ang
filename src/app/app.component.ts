import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import Res from '../models/Res';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  num1New: number = 0;
  num2New: number = 0;
  op: string | null | undefined = '';
  res: Res = {result: 0};
  API_URL: string = `http://localhost:3000`;

  constructor(private http: HttpClient){}
  calculatorForm = new FormGroup({
      number1: new FormControl('', Validators.required),
      number2: new FormControl('', Validators.required),
      operation: new FormControl('', Validators.required)
  });

  calculateNum(){
    this.num1New = Number(this.calculatorForm.value.number1);
    this.num2New = Number(this.calculatorForm.value.number2);
    this.op = this.calculatorForm.value.operation;

    this.API_URL = `http://localhost:3000/${this.op}?num1=${this.num1New}&num2=${this.num2New}`;

    this.calculatorForm.reset()
    return this.http.get<Res>(this.API_URL).subscribe({
      next: (data) =>{
        this.res = data;
      },
      error: (e)=>{
        this.res = e.error;
      }
    })
  }
}
