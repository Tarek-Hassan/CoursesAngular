import { Component, OnInit ,Input, Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-courses-items',
  templateUrl: './courses-items.component.html',
  styleUrls: ['./courses-items.component.sass']
})
export class CoursesItemsComponent implements OnInit {
@Input('courseInfo') course;
@Output() coursesClick= new EventEmitter <string>();
onClick(){
  this.coursesClick.emit(this.course.title);
}  
constructor() { }

  ngOnInit(): void {
  }

}
