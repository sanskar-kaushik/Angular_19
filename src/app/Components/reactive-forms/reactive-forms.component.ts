import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {
  reactiveForm: FormGroup;
  constructor(){
    this.reactiveForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(),
      isChecked: new FormControl(true),
      address: new FormGroup({
        city: new FormControl(''),
        street: new FormControl(''),
        pincode: new FormControl()
      })
    })
    this.reactiveForm.controls['isChecked'].disable();
  }
  onSubmit(){
    console.log(this.reactiveForm.value);
  }
  setValues(){
    this.reactiveForm.setValue({
      firstName: "Sanskar",
      lastName: "Kaushik",
      email: "sanskar.kaushik34@gmail.com",
      password: "12345678",
      isChecked: true,
      address: ({
        city: "delhi",
        street: "Nathu Chowk",
        pincode: 110097
      })
    })
  }
  resetValues(){
    // this.reactiveForm.reset();
    this.reactiveForm.controls['firstName'].reset();
  }
  patchValues(){
    // this.reactiveForm.patchValue({
    //   address: ({
    //     city: "delhi",
    //     street: "Nathu Chowk",
    //     pincode: 110097
    //   })
    // })
    this.reactiveForm.controls['firstName'].patchValue("sanskar");
  }
}
