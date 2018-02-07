import { Component, OnInit } from '@angular/core';

//service
import { ProjectsService } from '../../../services/projects.service';
import { UuidService } from '../../../services/uuid.service';

//model
import { Log } from '../../../models/log';
import { Project } from '../../../models/project';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

    projectId: string;
    projectName: string;
    logs: Log[];
    isNew: boolean = true;


    constructor(
        public projectsService: ProjectsService,
        public uuidService: UuidService
    ) { }

    ngOnInit() {
        //подприсываемся на выбор проекта
        this.projectsService.selectedProj.subscribe(proj => {
            if (proj.projectId !== null) {
                this.isNew = false;
                this.projectId = proj.projectId;
                this.projectName = proj.name;
                this.logs = proj.logs;
            }
        });

    }

    onSubmit() {
        if (this.isNew) {
            const newProject = {
                projectId: this.uuidService.generate(),
                name: this.projectName,
                logs: []
            };
            this.projectsService.addProject(newProject);
        } else {
            const updateProject = {
                projectId: this.projectId,
                name: this.projectName,
                logs : this.logs
            };
            this.projectsService.updateProject(updateProject);
        };

        this.clearState();
    }

    clearState() {
        this.isNew = true;
        this.projectId = this.projectName = this.logs = null;
        this.projectsService.clearProjectState();
    }


}
