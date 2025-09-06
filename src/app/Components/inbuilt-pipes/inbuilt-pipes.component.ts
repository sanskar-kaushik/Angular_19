import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CustomPipesPipe } from '../../Pipes/custom-pipes.pipe';
import { FormsModule } from '@angular/forms';
import { PurePipe } from '../../Pipes/pure.pipe';
import { ImpurePipe } from '../../Pipes/impure.pipe';

@Component({
  selector: 'app-inbuilt-pipes',
  imports: [CommonModule , CustomPipesPipe , FormsModule , PurePipe , ImpurePipe],
  templateUrl: './inbuilt-pipes.component.html',
  styleUrl: './inbuilt-pipes.component.css'
})
export class InbuiltPipesComponent {
  mobile: any = 7011232453;
  mode: string = "";
  pipes: string = "Pipes are used to format and manupulate the data";
  data: any = {
    name: "Sanskar",
    company: "Accenture",
    location: "Bengaluru"
  }
  date:Date = new Date();
  list: Observable<string[]> = of(["mango","apple","orange"]);
}
