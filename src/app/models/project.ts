import { Log } from './log';

export interface Project {
    projectId: string,
    name: string,
    logs: Log[]
}