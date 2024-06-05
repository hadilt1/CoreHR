import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, LoginComponent]
})
export class AppComponent {
  constructor(private router: Router){}
  title = 'CoreHR';


login() {
  console.log("done");
 
  this.router.navigate(['/main']);
}
}

