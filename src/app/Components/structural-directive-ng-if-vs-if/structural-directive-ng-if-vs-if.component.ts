import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directive-ng-if-vs-if',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './structural-directive-ng-if-vs-if.component.html',
  styleUrl: './structural-directive-ng-if-vs-if.component.css'
})
export class StructuralDirectiveNgIfVsIfComponent {
  checkbox: boolean =  false;
  buttonEnabled: boolean = true;
  input1: string = '';
  input2: string = '';
  checkCheckbox(){
    this.checkbox = !this.checkbox;
  }
  clickButtoneEnabled(){
    this.buttonEnabled = true;
  }
  clickButtonDisabled(){
    this.buttonEnabled = false;
  }
}
