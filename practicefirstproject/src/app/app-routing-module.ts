import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Login } from './login/login';
import { ViewAllstudent } from './view-allstudent/view-allstudent';
import { Addstudent } from './addstudent/addstudent';

const routes: Routes = [
  {path:'',component:Login},
  {path:'home', component:Home},
  {path: 'about', component: About},
  {path:'login', component: Login},
  {path:'view-allstu', component: ViewAllstudent},
  {path:'addstuform',component: Addstudent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
