import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesComponent } from './courses.component';
import { CoursesdetailsComponent } from './coursesdetails/coursesdetails.component';
import { CourseFormComponent } from './course-form/course-form.component';

const routes: Routes = [
  { 
  path: '',
  component: CoursesComponent,
  children:[
    {path:'new', component:CourseFormComponent},
    {path:':id', component:CoursesdetailsComponent}],
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
