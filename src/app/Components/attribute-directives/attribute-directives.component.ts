import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directives',
  imports: [CommonModule , FormsModule],
  templateUrl: './attribute-directives.component.html',
  styleUrl: './attribute-directives.component.css'
})
export class AttributeDirectivesComponent {
  textColor:string = "text-info";
  updateColor:string = 'blue';
  color:boolean = false;
  newColor:boolean = false;
  text:string = '';
  clickSuccess(){
  this.textColor = "text-success";
  }
  clickDanger(){
  this.textColor = "text-danger";
  }
  updateWarning(color: string){
    this.updateColor = color;
  }
  updatePrimary(color: string){
    this.updateColor = color;
  }
  customClass: any = {
    'color' : "red",
    'height' : "50px",
    'width' : "400px",
    'border' : '1px solid purple'
  }
}
