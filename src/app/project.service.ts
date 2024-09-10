import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
@Injectable({
    providedIn: 'root',
})
export class ProjectService {
    private readonly projectJsonLocation = "../assets/data/projects.json"
    // private readonly projectJsonLocation = "https://raw.githubusercontent.com/kuro-jojo/portfolio-angular/main/projects.json"
    constructor(
        private http: HttpClient
    ) {

    }

    getProjects() {
        return this.http.get<Project[]>(this.projectJsonLocation).pipe(
            map((resp) => {
                return resp.filter(project => isValidProject(project)).sort((a, b) => a.id - b.id);
            })
        );
    }
}

export interface Project {
    id: number
    name: string
    description: string
    image: string
    url: string
    stack: string[]
}

function isValidProject(project: Project): boolean {
    return project.name !== undefined && project.description !== undefined && project.image !== undefined && project.url !== undefined && project.stack !== undefined
}