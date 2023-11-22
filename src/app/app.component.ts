import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/navbar/navbar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './home/home.component.html',
    styleUrl: './home/home.component.css',
    imports: [CommonModule, RouterOutlet, NavbarComponent]
})
export class AppComponent {
  title = 'akropolis-website';
}
