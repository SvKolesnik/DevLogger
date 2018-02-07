import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectComponent } from './components/project/project.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProjectFormComponent } from './components/home/project-form/project-form.component';
import { ProjectListComponent } from './components/home/project-list/project-list.component';
import { LogListComponent } from './components/project/log-list/log-list.component';
import { LogFormComponent } from './components/project/log-form/log-form.component';

//routing
import { AppRoutingModule } from './app-routing/app-routing.module';

//services
import { ProjectsService } from './services/projects.service';
import { UuidService } from './services/uuid.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectComponent,
    AboutComponent,
    NotFoundComponent,
    NavBarComponent,
    ProjectFormComponent,
    ProjectListComponent,
    LogListComponent,
    LogFormComponent
  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
      FormsModule
  ],
  providers: [ProjectsService, UuidService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
