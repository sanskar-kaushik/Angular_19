import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../../Services/crud.service';

@Component({
  selector: 'app-view-user',
  imports: [],
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.css'
})
export class ViewUserComponent {
  id!: number;
  api_data: any;
  constructor(private _router: Router, private activatedRoute: ActivatedRoute, private _crud: CrudService){}
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this._crud.getDataById(this.id).subscribe(res => {
      this.api_data = res;
    })
  }
  onCancel(){
    this._router.navigateByUrl('crud');
  }
}
