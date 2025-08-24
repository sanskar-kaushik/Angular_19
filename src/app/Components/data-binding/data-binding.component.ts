import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent {
  name: string = 'Sanskar';
  company: string = 'Accenture';
  picture: string =
    'https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg';
  onSave() {
    alert('Data saved successfully');
  }
  onChange(){
    alert("Country updated");
  }
}
