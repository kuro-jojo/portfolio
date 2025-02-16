import { NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';

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

    isBurgetActive: boolean = false;

    switchLanguage(event: Event, language: string = '') {
        event.preventDefault();
        window.location.href = this.path + '/' + language;
        this.currentLang = language;
    }

    @HostListener('window:resize', ['$event.target.innerWidth'])
    onResize(width: number) {
        const nav = document.getElementById('links');
        if (nav) {
            nav.style.transform = (width < 960 && !this.isBurgetActive) ? "translateX(-100%)" : "none";
        }
    }

    showNav(event: Event) {
        event.preventDefault();
        const nav = document.getElementById('links');
        if (nav) {
            nav.style.transform = this.isBurgetActive ? "translateX(-100%)" : "none";
            this.isBurgetActive = !this.isBurgetActive;
        }
    }
}
