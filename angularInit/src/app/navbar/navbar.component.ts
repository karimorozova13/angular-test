import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `<h3>Navbar template</h3>
    <p>Hi there</p> `,
  styles: [
    `
      h3 {
        color: white;
        background-color: teal;
        padding: 7px;
      }
      p {
        color: green;
      }
    `,
  ],
})
export class NavbarComponent {}
