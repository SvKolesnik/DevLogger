import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//service
import { ProjectsService } from '../../services/projects.service';

//models
import { Project } from '../../models/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

    currentRouterId: string;
    currentProject: Project;
    constructor(
        public projectsService: ProjectsService,
        public router: ActivatedRoute

    ) { }

    ngOnInit() {
        this.currentRouterId = this.router.snapshot.params.id;
        this.projectsService.getProject(this.currentRouterId).subscribe(proj => {
            this.currentProject = proj;
        }, error => { console.log(error); });
  }

}
