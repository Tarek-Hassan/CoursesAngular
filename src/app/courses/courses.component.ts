import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.sass']
})
export class CoursesComponent implements OnInit {
 data='';
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onLimitChange(ev){
    const value =ev.target.value;
    this.router.navigate(['/courses'],{queryParams:{ limit:value },queryParamsHandling:'merge'});

  }

  search(ev){

    const searchData= ev.target.value; 
    this.router.navigate(['/courses'],{queryParams:{ q:searchData }});

  }

}
