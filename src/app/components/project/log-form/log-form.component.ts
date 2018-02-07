import { Component, OnInit, Input } from '@angular/core';

//service
import { ProjectsService } from '../../../services/projects.service';
import { UuidService } from '../../../services/uuid.service';

@Component({
    selector: 'app-log-form',
    templateUrl: './log-form.component.html',
    styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {

    id: string;
    text: string;
    date: string;
    isNew: boolean = true;
    @Input() currentRouterId: string;
    constructor(
        public projectsService: ProjectsService,
        public uuidService: UuidService

    ) { }

    ngOnInit() {
        //подприсываемся на выбор лога
        this.projectsService.selectedLog.subscribe(log => {
            if (log.id !== null) {
                this.isNew = false;
                this.id = log.id;
                this.text = log.text;
                this.date = log.date;
            }
        });
    }

    onSubmit() {
        if (this.isNew) {
            const newLog = {
                id: this.uuidService.generate(),
                text: this.text,
                date: new Date()
            };
            this.projectsService.addLog(newLog, this.currentRouterId);
        } else {
            const updateLog = {
                id: this.id,
                text: this.text,
                date: this.date
            };
            this.projectsService.updateLog(updateLog, this.currentRouterId);

        }
        this.clearState();
    }

    clearState() {
        this.isNew = true;
        this.id = this.text = this.date = null;
        this.projectsService.clearState();
    }
}
