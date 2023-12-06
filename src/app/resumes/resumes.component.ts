import { Component } from '@angular/core';
import { ResumeService } from '../services/resume.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jsPDF } from 'jspdf';

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

  downloadResume(resumeId: number) {
    const resume = this.resumeService.getResumeById(resumeId);
    if (resume) {
      const doc = new jsPDF();
      let yOffset = 10;
  

      const addText = (text: string, xOffset: number, yOffset: number, fontSize: number = 12) => {
        doc.setFontSize(fontSize);
        doc.text(text, xOffset, yOffset);
        return yOffset + 7; 
      };
  
      yOffset = addText('Name: ' + resume.name, 10, yOffset, 16); 
      yOffset = addText('Email: ' + resume.email, 10, yOffset);
      yOffset = addText('Phone: ' + resume.phone, 10, yOffset);
  
      yOffset = addText('Education:', 10, yOffset, 14); 
      yOffset = addText('School: ' + resume.school, 10, yOffset);
      yOffset = addText('Graduation: ' + resume.graduationDate, 10, yOffset);
      yOffset = addText('Degree: ' + resume.degreeType, 10, yOffset);
  
      yOffset = addText('Work Experience:', 10, yOffset, 14);
      yOffset = addText('Occupation: ' + resume.occupation, 10, yOffset);
      yOffset = addText('Dates: ' + resume.startDate + ' - ' + resume.endDate, 10, yOffset);
      yOffset = addText('Responsibilities: ' + resume.responsibilities, 10, yOffset);
  
      yOffset = addText('Skills:', 10, yOffset, 14);
      yOffset = addText(resume.skills, 10, yOffset);
  
      yOffset = addText('Projects:', 10, yOffset, 14);
      yOffset = addText(resume.projectName + ' - ' + resume.projectDescription, 10, yOffset);
      yOffset = addText(resume.project2Name + ' - ' + resume.project2Description, 10, yOffset);
  
      yOffset = addText('Awards:', 10, yOffset, 14);
      yOffset = addText(resume.awardTitle + ' ~' + resume.awardDate + '~', 10, yOffset);
      yOffset = addText(resume.awardTitle2 + ' ~' + resume.awardDate2 + '~', 10, yOffset);
  
      doc.save('resume.pdf');
    }
  }
}