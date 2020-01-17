import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from './components/resume/resume.component';
import { PageComponent } from './components/page/page.component';

const routes: Routes = [
 
  { path: ' ', component: PageComponent },
  { path:'resume', component: ResumeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
