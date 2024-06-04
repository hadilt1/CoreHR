import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { Router } from '@angular/router';
import { navbarComponent } from "./navbar/navbar.component"
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, LoginComponent, navbarComponent]
})
export class AppComponent {
  constructor(private router: Router){}
  title = 'CoreHR';


login() {
  console.log("done");
 
  this.router.navigate(['/main']);
}
}

