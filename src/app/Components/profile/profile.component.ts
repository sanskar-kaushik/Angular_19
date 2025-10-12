import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../../Services/shared-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  userData: any;
  eligible: boolean;
  api_data : any;
  constructor(private _shared: SharedDataService){
    this.userData = this._shared.user;
    this.eligible = _shared.isEligible();
  }
  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this._shared.apiData().subscribe(res=>{
      this.api_data = res;
    })
  }
}
