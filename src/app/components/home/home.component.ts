import { Component, OnInit } from '@angular/core';

//service
import { ProjectsService } from '../../services/projects.service';

//models
import { Project } from '../../models/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    projects: Project[];

    constructor(
        public projectsService: ProjectsService
    ) { }

  ngOnInit() {
          this.projectsService.getAllProject().subscribe(projects => {
          this.projects = projects;
          },
              error => { console.log(error); }
          );

  }

}
