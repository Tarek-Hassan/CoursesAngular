import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.sass']
})
export class CoursesListComponent implements OnInit {
courses;
pages:any[];
currentPage:number=1;

constructor(
  private CoursesService:CoursesService,
  private activatedRoute:ActivatedRoute
  ){}
  

  ngOnInit(): void {
   
    this.activatedRoute.queryParamMap.subscribe((queryParamMap)=>{
      // const limit=queryParamMap.get('limit') || 10 ;
      const params={};
      queryParamMap.keys.forEach(
        (key)=>(params[key]=queryParamMap.get(key))
      );
      this.courses=this.CoursesService.getCourses(params).subscribe((res:any)=>{
        if(res.status){
          this.courses=res.data;
          this.currentPage=res.page;
          this.pages=new Array(res.total_pages||0);
        }
      });
    });
    
  }
  onCoursesClick(data){
    console.log(data); 
  }
  onClickItem(course){
    this.CoursesService.changeCourseDate(course);
  }

}
