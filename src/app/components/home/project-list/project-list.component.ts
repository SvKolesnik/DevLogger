import { Component, OnInit, Input } from '@angular/core';

//service
import { ProjectsService } from '../../../services/projects.service';

//models
import { Log } from '../../../models/log';
import { Project } from '../../../models/project';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
    @Input() projects: Project[];
    selectedProject: Project;

    constructor(
        public projectsService: ProjectsService
    ) { }

    ngOnInit() {
        this.projectsService.selectedProj.subscribe(proj => {
            if (proj.projectId === null) {
                this.selectedProject = { projectId: null, name: null, logs: null };
            }
        });
    }

    onSelect(project: Project, e) {
        console.log(project, e);
        if (e.target.id === 'remove_' + project.projectId) {
            this.projectsService.deleteProject(project);
        } else {
            this.projectsService.setFormProject(project);
            this.selectedProject = project
        }
    }


}
