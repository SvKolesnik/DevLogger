import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { ProjectComponent } from '../components/project/project.component';
import { AboutComponent } from '../components/about/about.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';

const routers: Routes = [
    { path: '', component: HomeComponent },
    { path: 'project/:id', component: ProjectComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', component: NotFoundComponent },
];

@NgModule({
    exports: [ RouterModule ],
    imports: [
        RouterModule.forRoot(routers)
  ],
  declarations: []
})
export class AppRoutingModule { }
