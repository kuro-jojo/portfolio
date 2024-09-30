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
    currentLang: string = window.location.pathname.split('/')[2] || '';
    path: string = window.location.pathname.split('/').slice(0, 2).join('/');

    switchLanguage(event: Event, language: string = '') {
        event.preventDefault();
        window.location.href = this.path + '/' + language;
        this.currentLang = language;
    }
}
