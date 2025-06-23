import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Login } from './login/login';
import { ViewAllstudent } from './view-allstudent/view-allstudent';

const routes: Routes = [
  {path:'',component:Login},
  {path:'home', component:Home},
  {path: 'about', component: About},
  {path:'login', component: Login},
  {path:'view-allstu', component: ViewAllstudent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
