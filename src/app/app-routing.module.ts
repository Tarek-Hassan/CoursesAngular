import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { CourseFormComponent } from './courses/course-form/course-form.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesdetailsComponent } from './courses/coursesdetails/coursesdetails.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [

  { path: '',redirectTo:'home',pathMatch:'full'},
  { path: 'home',component:HomeComponent},
  { path: 'about',component:AboutComponent},
  // { path: 'courses',component:CoursesComponent},
  // { path: 'new',component:CourseFormComponent},
  // // {
  // //   path:'',component:CoursesComponent,
  // //   children:[{path:":id",component:CoursesdetailsComponent}],
  // // },
  { path: 'courses', loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule) },
];

@NgModule({
  // imports: [
  // RouterModule.forRoot(routes,{
  //   preloadingStrategy: PreloadAllModules}),
  // ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
