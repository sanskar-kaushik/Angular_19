import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../Services/crud.service';
import { Iuser } from '../../Interfaces/iuser';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud',
  imports: [CommonModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css',
})
export class CrudComponent implements OnInit {
  apiData: Iuser[] = [];
  constructor(private _crud: CrudService, private _router: Router) {}
  ngOnInit(): void {
    this.getAllData();
  }
  getAllData() {
    this._crud.getData().subscribe((res) => {
      this.apiData = res;
    });
  }
  addUser() {
    this._router.navigateByUrl('addUser');
  }
  onUpdate(id: number){
    this._router.navigate(['updateUser', id]);
  }
  onView(id: number){
    this._router.navigate(['viewUser', id]);
  }
  onDelete(id: number){
    this._crud.deleteDataById(id).subscribe(res => {
      this.getAllData();
      alert("Record deleted successfully");
    });
  }
}
