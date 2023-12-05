import { Component } from '@angular/core';
import { ResumeService } from '../services/resume.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-resumes',
  templateUrl: './resumes.component.html',
  styleUrl: './resumes.component.css'
})
export class ResumesComponent implements OnInit {
  resumes: any[] = [];

  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.resumes = this.resumeService.getResumes();
  }

  deleteResume(id: number): void {
    this.resumeService.deleteResume(id);
    this.resumes = this.resumeService.getResumes();
  }
}