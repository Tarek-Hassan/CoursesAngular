import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable(
  // {
  // providedIn: 'root'
// }
)
export class CoursesService {
  // private   courses=[
  //   {
  //     id:1,
  // title:'NodejS',
  // instructor:'tAREK',
  // isAvailable:true,
  // },
  //   {
  // id:2,
  // title:'laravel',
  // instructor:'hassan',
  // isAvailable:false,
  // },
  //   {id:3,
  // title:'eng',
  // instructor:'ahmed',
  // isAvailable:true,
  // },
  //   {id:4,
  // title:'jS',
  // instructor:'ali',
  // isAvailable:false,
  // }
  // ];
private apiUrl=" https://afternoon-falls-30227.herokuapp.com/api/v1/courses";
  private courseSubject= new BehaviorSubject(null);
  constructor(private http:HttpClient) { }
  changeCourseDate(data){
    this.courseSubject.next(data);
  }
  get courseSubjectObservable(){
    return this.courseSubject.asObservable();
  }
  getCourses(params={}){
    return this.http.get(this.apiUrl,{params}); 
  }
  getCourseById(id){
    return this.http.get(`${this.apiUrl}/${id}`); 
    // return this.courses.find((course)=>course.id==id); 
  }
  addCourse(course){
    return this.http.post(this.apiUrl,course); 
    // return this.courses.push(course); 
  }
}
