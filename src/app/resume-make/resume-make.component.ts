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
    this.route.paramMap.subscribe(params => {
      const resumeId = params.get('id');
      if (resumeId) {
        const fetchedResume = this.resumeService.getResumeById(+resumeId);
        if (fetchedResume) {
          this.resume = { ...fetchedResume };
        }
      }
    });
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
