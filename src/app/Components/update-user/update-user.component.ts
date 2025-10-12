import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../../Services/crud.service';

@Component({
  selector: 'app-update-user',
  imports: [ReactiveFormsModule],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent implements OnInit {
  updateUserForm: FormGroup;
  id!: number;
  api_data: any;
  constructor(private _router: Router, private fb: FormBuilder, private activatedRoute: ActivatedRoute, private _crud: CrudService){
    this.updateUserForm = fb.group({
      id: [''],
      name: [''],
      username: [''],
      email: ['']
    })
  }
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this._crud.getDataById(this.id).subscribe(res => {
      this.api_data = res;
      this.updateUserForm.setValue({id: this.api_data.id , name: this.api_data.name , username: this.api_data.username , email: this.api_data.email });
    })
  }
  onCancel(){
    this._router.navigateByUrl('/crud');
  }
  
  onSubmit(){
    console.log(this.updateUserForm.value);
    this._crud.postDataById(this.id,this.updateUserForm.value).subscribe(res=>{
      this._router.navigateByUrl('crud');
    })
  }
}