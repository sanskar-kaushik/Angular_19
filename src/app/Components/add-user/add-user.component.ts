import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../../Services/crud.service';

@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  addUserForm: FormGroup;
  constructor(private _router: Router, private fb: FormBuilder, private _crud: CrudService){
    this.addUserForm = fb.group({
      name: [''],
      username: [''],
      email: ['']
    })
  }

  cancel(){
    this._router.navigateByUrl('crud');
  }
  OnSubmit(){
    this._crud.addData(this.addUserForm.value).subscribe(res=>{
      this._router.navigateByUrl('crud');
    })
  }
  
}
