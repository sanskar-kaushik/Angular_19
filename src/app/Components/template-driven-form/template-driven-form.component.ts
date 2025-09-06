import { Component, OnInit } from '@angular/core';
import { User } from '../../Interfaces/user';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule , CommonModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent implements OnInit{
  ngOnInit(): void {
    // this.userDetails = {
    // firstName: "Sanskar",
    // lastName: "Kaushik",
    // email: "sanskar.kaushik34@gmail.com",
    // password: 12345678,
    // isChecked: true
    // }
  }
  userDetails: User = {};
  onSubmit(userForm: NgForm){
    console.log(userForm.value);
    alert("Form Submitted");
  }
  setValues(userForm: NgForm){
    this.userDetails = {
    firstName: "Sanskar",
    lastName: "Kaushik",
    email: "sanskar.kaushik34@gmail.com",
    password: 12345678,
    isChecked: true
    }
    userForm.setValue(this.userDetails);
  }
  patchValues(userForm: NgForm){
    this.userDetails = {
    firstName: "Sanskar",
    lastName: "Kaushik",
    email: "sanskar.kaushik34@gmail.com",
    }
    userForm.control.patchValue(this.userDetails);
  }
  resetValues(userForm: NgForm){
    userForm.resetForm();
  }
}
