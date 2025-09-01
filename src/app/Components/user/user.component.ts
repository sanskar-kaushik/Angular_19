import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  constructor(private router: Router) {}
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
