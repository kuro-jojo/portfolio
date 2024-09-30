import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [NgClass],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
})
export class NavbarComponent {
    currentLang: string = window.location.pathname.split('/')[1];

    switchLanguage(language: string, event: Event) {
        event.preventDefault();
        console.log('Path: ', window.location.pathname, window.location.href);
        this.currentLang = language;
        const newUrl = `/${language}`;
        window.location.href = newUrl;
    }
}
