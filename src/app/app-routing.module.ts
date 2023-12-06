import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ResumeMakeComponent } from './resume-make/resume-make.component';
import { ResumesComponent } from './resumes/resumes.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'resume-make', component: ResumeMakeComponent },
  { path: 'resumes', component: ResumesComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'resume-make/:id', component: ResumeMakeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
