import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CoursesService } from '../services/courses.service';
import { course } from '../models/course.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.sass']
})
export class CourseFormComponent implements OnInit {
course= new course();
  constructor( private coursesService:CoursesService,
    private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){

// console.log(form.value);
// this.coursesService.addCourse(form.value);
if(form.valid){
  const course={...this.course};
// this.coursesService.addCourse(course);
this.coursesService.addCourse(course).subscribe((res: any)=>{
  if(res.status){
this.router.navigate(['/courses',res.data.id]);
  }
});

}

  }

}
