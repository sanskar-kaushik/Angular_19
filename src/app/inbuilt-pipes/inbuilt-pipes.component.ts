import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-inbuilt-pipes',
  imports: [CommonModule],
  templateUrl: './inbuilt-pipes.component.html',
  styleUrl: './inbuilt-pipes.component.css'
})
export class InbuiltPipesComponent {
  pipes: string = "Pipes are used to format and manupulate the data";
  data: any = {
    name: "Sanskar",
    company: "Accenture",
    location: "Bengaluru"
  }
  date:Date = new Date();
  list: Observable<string[]> = of(["mango","apple","orange"]);
}
