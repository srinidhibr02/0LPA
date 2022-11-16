import { AboutComponent } from './page/about/about.component';
import { WelcomeComponent } from './page/welcome/welcome.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'welcome'
  },
  {
    path:'welcome',
    component:WelcomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'**',
    redirectTo:'error'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
