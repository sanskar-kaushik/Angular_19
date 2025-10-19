import { Component, OnInit } from '@angular/core';
import { ResourceApiService } from '../../Services/resource-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resource-api',
  imports: [CommonModule],
  templateUrl: './resource-api.component.html',
  styleUrl: './resource-api.component.css'
})
export class ResourceApiComponent implements OnInit {
  apiData: any;
  constructor(private resource: ResourceApiService){}
  ngOnInit(): void {
    this.getData();
  }
  getData(){
    // this.apiData = this.resource.resourceData;
    this.apiData = this.resource.rxResourceData;
  }
}
