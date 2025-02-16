import { Component } from '@angular/core';
import { Project, ProjectService } from '../project.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [HttpClientModule],
    providers: [ProjectService],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css'
})
export class ProjectsComponent {
    projects: Project[] = []

    constructor(
        private projectService: ProjectService
    ) {
    }

    ngOnInit() {
        this.projectService.getProjects().subscribe({
            next: (resp) => {
                this.projects = resp
            },
            error: (error) => {
                console.error(error);
            }
        })
    }
}
