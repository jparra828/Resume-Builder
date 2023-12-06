import { Component } from '@angular/core';
import { ResumeService } from '../services/resume.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resumes',
  templateUrl: './resumes.component.html',
  styleUrl: './resumes.component.css'
})
export class ResumesComponent implements OnInit {
  resumes: any[] = [];

  constructor(
    private resumeService: ResumeService,
    private router: Router 
  ) {}

  ngOnInit(): void {
    this.resumes = this.resumeService.getResumes();
  }

  deleteResume(id: number): void {
    this.resumeService.deleteResume(id);
    this.resumes = this.resumeService.getResumes();
  }

  editResume(id: number): void {
    this.router.navigate(['/resume-make', id]); 
  }
}