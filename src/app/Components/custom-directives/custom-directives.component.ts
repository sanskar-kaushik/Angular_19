import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DisableCopyPasteDirective } from '../../Directives/disable-copy-paste/disable-copy-paste.directive';

@Component({
  selector: 'app-custom-directives',
  imports: [CommonModule , FormsModule , DisableCopyPasteDirective],
  templateUrl: './custom-directives.component.html',
  styleUrl: './custom-directives.component.css'
})
export class CustomDirectivesComponent {
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
