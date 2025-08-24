import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive-ngfor-vs-for',
  imports: [CommonModule],
  templateUrl: './structural-directive-ngfor-vs-for.component.html',
  styleUrl: './structural-directive-ngfor-vs-for.component.css',
})
export class StructuralDirectiveNgforVsForComponent {
  employeeDetails: any[] = [
    {
      empName: 'Sanskar',
      empNum: 96,
      empEmail: 'sanskar@gmail.com',
      empDept: 'developer',
    },
    {
      empName: 'Devesh',
      empNum: 97,
      empEmail: 'devesh@gmail.com',
      empDept: 'HR',
    },
    {
      empName: 'Kitanshi',
      empNum: 98,
      empEmail: 'kitanshi@gmail.com',
      empDept: 'AI',
    },
    {
      empName: 'Priyanshu',
      empNum: 99,
      empEmail: 'priyanshu@gmail.com',
      empDept: 'infra',
    },
  ];
  empNames: string[] = ['Sanskar', 'Priyanshu', 'Celina', 'Deepak'];
}
