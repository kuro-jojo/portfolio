import { Component, HostListener, ElementRef, ViewChild } from '@angular/core';
import { Project, ProjectService } from '../project.service';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [HttpClientModule, MatPaginatorModule, CommonModule],
    providers: [ProjectService],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css'
})
export class ProjectsComponent {
    projects: Project[] = [];
    pageSize = 3; // Default for desktop
    currentPage = 0;
    length = 0;
    showPaginator = true;
    showFirstLastButtons = true;
    @ViewChild('projectSection') projectSection!: ElementRef;

    constructor(
        private projectService: ProjectService,
    ) {
        window.addEventListener('resize', () => this.showPaginatorBasedOnWidth());
    }

    ngOnInit() {
        this.projectService.getProjects().subscribe({
            next: (resp) => {
                this.projects = resp;
                this.length = resp.length;
                this.currentPage = 0;
                this.showPaginatorBasedOnWidth();
            },
            error: (error) => {
                console.error(error);
            }
        });
    }

    ngOnDestroy() {
        window.removeEventListener('resize', () => this.updatePageSize());
    }

    @HostListener('window:resize', ['$event'])
    showPaginatorBasedOnWidth() {
        const width = window.innerWidth;
        if (width >= 500) {
            this.showPaginator = true;
            this.showFirstLastButtons = true;
            this.updatePageSize()
        } else if (width >= 400) {
            this.showFirstLastButtons = false;
        } else {
            this.showPaginator = false;
            this.pageSize = this.length;
        }
    }

    updatePageSize() {
        const width = window.innerWidth;
        if (width >= 1470) {
            this.showPaginator = true;
            this.pageSize = 3;
        } else if (width > 800) {
            this.showPaginator = true;
            this.pageSize = 2;
        } else {
            this.showPaginator = true;
            this.pageSize = 1;
        }
    }

    onPageChange(event: PageEvent) {
        this.currentPage = event.pageIndex;
        this.pageSize = event.pageSize;
        this.projectSection?.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }

    getPageSizeOptions(): number[] {
        const options: number[] = [1, 2];
        let current = 3;

        while (current <= this.length) {
            options.push(current);
            current *= 2;
        }

        if (options.length < 3) {
            options.push(3, 6);
        }

        // Remove duplicates and sort
        const uniqueOptions = Array.from(new Set(options)).sort((a, b) => a - b);
        return uniqueOptions;
    }
}
