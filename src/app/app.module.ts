import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DesignComponent } from './design/design.component';
import { WebComponent } from './web/web.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SchoolComponent } from './school/school.component';
import { CollegeComponent } from './college/college.component';
import { ProfileComponent } from './profile/profile.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjectworkService } from './projectwork.service';
import { ProfileService } from './profile.service';
import { SchoolService } from './school.service';
import { CollegeService } from './college.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DesignComponent,
    WebComponent,
    DashboardComponent,
    SchoolComponent,
    CollegeComponent,
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routingComponents,
    FormsModule,
    CommonModule
  ],
  providers: [ProjectworkService, ProfileService, SchoolService, CollegeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
