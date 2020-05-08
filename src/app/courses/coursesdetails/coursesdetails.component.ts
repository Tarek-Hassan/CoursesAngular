import { Component, OnInit, OnDestroy } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
selector: 'app-coursesdetails',
templateUrl: './coursesdetails.component.html',
styleUrls: ['./coursesdetails.component.sass']
})
export class CoursesdetailsComponent implements OnInit,OnDestroy {
course;
private courseSubscription:Subscription;
constructor(
  private coursesService:CoursesService,
  private activateRoute:ActivatedRoute) {

}

ngOnInit(): void {

this.courseSubscription=this.activateRoute.paramMap.subscribe((paramMap)=>{
  if(paramMap.has('id')){
    const id=paramMap.get('id');
    // static data
    // this.course=this.coursesService.getCourseById(paramMap.get('id'));
    // from api
    this.course=this.coursesService.getCourseById(id).subscribe((res:any)=>{
    if(res.status){
this.course=res.data;

}
    });
  }
});
}


ngOnDestroy(){
this.courseSubscription.unsubscribe();
}

}
