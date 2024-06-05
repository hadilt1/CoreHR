import { Component} from '@angular/core';
import { navbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [navbarComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})

export class MainPageComponent {}
