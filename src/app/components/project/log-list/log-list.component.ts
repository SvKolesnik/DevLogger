import { Component, OnInit, Input } from '@angular/core';

//service
import { ProjectsService } from '../../../services/projects.service';

//model
import { Log } from '../../../models/log';

@Component({
    selector: 'app-log-list',
    templateUrl: './log-list.component.html',
    styleUrls: ['./log-list.component.css']
})
export class LogListComponent implements OnInit {

    @Input() logs: Log[];
    @Input() currentRouterId: string;

    selectedLog: Log;
    constructor(
        public projectsService: ProjectsService
    ) { }

    ngOnInit() {
        this.projectsService.selectedLog.subscribe(log => {
            if (log.id === null) {
                this.selectedLog = { id: null, text: null, date: null };
            }
        });
    }

    onSelect(log: Log, e) {
        if (e.target.id === 'remove_' + log.id) {
            this.projectsService.deleteLog(log, this.currentRouterId);
        } else {
            this.projectsService.setFormLog(log);
            this.selectedLog = log;
        }
    }

}
