import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "./navbar/navbar.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ContactComponent } from "./contact/contact.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, NavbarComponent, AboutMeComponent, ProjectsComponent, ContactComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'portfolio';
    showArrow = false;

    @HostListener('window:wheel', [])
    onWindowScroll() {
        this.showArrow = window.scrollY > 20;
    }
}
