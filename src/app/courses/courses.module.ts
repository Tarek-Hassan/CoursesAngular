import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesItemsComponent } from './courses-items/courses-items.component';
import { CoursesdetailsComponent } from './coursesdetails/coursesdetails.component';
import { CoursesService } from './services/courses.service';
import { FormsModule } from '@angular/forms';
import { CourseFormComponent } from './course-form/course-form.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [CoursesComponent, CoursesListComponent, CoursesItemsComponent, CoursesdetailsComponent, CourseFormComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule, 
    FormsModule,
    HttpClientModule
  ],
  providers:[CoursesService],
  exports:[CoursesComponent]
})
export class CoursesModule { }
