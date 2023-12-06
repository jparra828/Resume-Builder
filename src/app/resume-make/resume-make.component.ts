import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ResumeService } from '../services/resume.service';


@Component({
  selector: 'app-resume-make',
  templateUrl: './resume-make.component.html',
  styleUrl: './resume-make.component.css'
})
export class ResumeMakeComponent implements OnInit {
  resume: any = {
    phone: '',
    school: '',
    graduationDate: '',
    degreeType: '',
    occupation: '',
    startDate: '',
    endDate: '',
    responsibilities: '',
    skills: '',
    projectName: '',
    projectDescription: '',
    project2Name: '',
    project2Description: '',
    awardTitle: '',
    awardDate: '',
    awardTitle2: '',
    awardDate2: '',
  };

  constructor(
    private resumeService: ResumeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const resumeId = this.route.snapshot.paramMap.get('id');
    if (resumeId) {
      this.resume = this.resumeService.getResumeById(+resumeId) || this.resume;
    }
  }

  onSubmit(resumeData: any): void {
    if (this.resume.id) {
      this.resumeService.updateResume(this.resume.id, resumeData);
    } else {
      this.resumeService.addResume(resumeData);
    }
    this.router.navigate(['/resumes']); 
  }
}
