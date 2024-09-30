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
    constructor() {
        console.log('Current Lang: ', this.currentLang);
    }
    switchLanguage(language: string, event: Event) {
        event.preventDefault();
        console.log('Path: ', window.location.pathname, window.location.href);
        window.location.href = window.location.pathname.replace(this.currentLang, language);
        this.currentLang = language;
    }
}
