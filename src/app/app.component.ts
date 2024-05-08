import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Registeration Form';

  displayName = '';
  displayAddress = '';
  displayContact = '';
  displayEmail = '';

  registerTitle = '';

  getInfo(name:string, address:string, contact:string, email:string){
    this.displayName = name;
    this.displayAddress = address;
    this.displayContact = contact;
    this.displayEmail = email;

    this.registerTitle = 'User Details'; 
  }

}
