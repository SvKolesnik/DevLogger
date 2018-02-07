import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

//models
import { Log } from '../models/log';
import { Project } from '../models/project';


@Injectable()
export class ProjectsService {
    projects: Project[];
    currentProject: Project;

    private logSource = new BehaviorSubject<Log>({ id: null, text: null, date: null });
    selectedLog = this.logSource.asObservable();

    private projSource = new BehaviorSubject<Project>({ projectId: null, name: null, logs: null });
    selectedProj = this.projSource.asObservable();


    constructor() {
        this.projects = JSON.parse(localStorage.getItem('projects')) || [];
    }

    getAllProject(): Observable<Project[]> {
        return of(this.projects);
    }

    getProject(id) {
        this.projects.forEach((current, ind) => {
            if (current.projectId === id)
                this.currentProject = current;
        });
        return of(this.currentProject);
    }

    addProject(project: Project) {
        this.projects.unshift(project);
        localStorage.setItem('projects', JSON.stringify(this.projects) );
    }

    addLog(log: Log, projectId) {
        console.log(log, projectId);

        this.projects.forEach((current, ind) => {
            if (current.projectId === projectId)
                current.logs.unshift(log);
        });
        localStorage.setItem('projects', JSON.stringify(this.projects));

    }

    updateLog(log: Log, projectId) {
        this.projects.forEach((current) => {
            if (current.projectId === projectId)
                current.logs.forEach( (value, i) => {
                    if (value.id === log.id) {
                        current.logs.splice(i, 1);
                        current.logs.unshift(log);
                    }
                });
        });
        localStorage.setItem('projects', JSON.stringify(this.projects));
    }

    setFormLog(log: Log) {
        this.logSource.next(log);
    }

    setFormProject(project: Project) {
        this.projSource.next(project);
    }

    clearState() {
        this.logSource.next({ id: null, text: null, date: null });
    }

    clearProjectState() {
        this.projSource.next({ projectId: null, name: null, logs: null });
    }



    deleteLog(log: Log, projectId) {
        this.projects.forEach((current) => {
            if (current.projectId === projectId)
                current.logs.forEach((value, i) => {
                    if (value.id === log.id) {
                        current.logs.splice(i, 1);
                    }
                });
        });
        localStorage.setItem('projects', JSON.stringify(this.projects));
    }

    deleteProject(project: Project) {
        this.projects.forEach((current, ind) => {
            if (current.projectId === project.projectId)
                this.projects.splice(ind, 1);
        });
        localStorage.setItem('projects', JSON.stringify(this.projects));
    }

    updateProject(project: Project) {
        this.projects.forEach((current, ind) => {
            if (current.projectId === project.projectId) {
                this.projects.splice(ind, 1);
                this.projects.unshift(project);
            }
        });
        localStorage.setItem('projects', JSON.stringify(this.projects));
    }

}
