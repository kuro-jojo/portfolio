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
    currentLang: string = window.location.pathname.split('/')[2];
    constructor() {
        console.log('Current Lang: ', this.currentLang, window.location.pathname);
    }
    switchLanguage(event: Event, language: string = '') {
        event.preventDefault();
        console.log('Path v2: ', window.location.pathname, window.location.href);
        this.currentLang = window.location.pathname.replace(this.currentLang, language);
    }
}
