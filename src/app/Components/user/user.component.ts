import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  constructor(private router: Router) {
    console.log('0. Constructor called');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('1. ngOnChanges called');
  }
  ngOnInit(): void {
    console.log('2. ngOnInit called');
  }
  ngDoCheck(): void {
    console.log('3. ngOnCheck called');
  }
  ngAfterContentInit(): void {
    console.log('4. ngAfterContentInit called');
  }
  ngAfterContentChecked(): void {
    console.log('5. ngAfterContentChecked called');
  }
  ngAfterViewInit(): void {
    console.log('6. ngAfterViewInit called');
  }
  ngAfterViewChecked(): void {
    console.log('7. ngAfterViewChecked called');
  }
  ngOnDestroy(): void {
    console.log('8. ngOnDestroy called');
  }
  username: string = '';
  password: string = '';
  loginData() {
    if (this.username === 'Data Bindings' && this.password === 'password') {
      this.router.navigateByUrl('data-binding');
    } else if (this.username === 'Structural Directives' && this.password === 'password') {
      this.router.navigate(['structural-directives']);
    } else if (this.username === 'Attribute Directives' && this.password === 'password') {
      this.router.navigate(['attribute-directives']);
    } else {
      this.router.navigate(['**']);
    }
  }
}
