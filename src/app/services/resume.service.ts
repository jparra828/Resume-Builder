import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private resumes: any[] = [];
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.resumes = JSON.parse(localStorage.getItem('resumes') || '[]');
    }
  }

  getResumes(): any[] {
    return this.resumes;
  }

  getResumeById(id: number): any {
    return this.resumes.find(r => r.id === id);
  }

  addResume(resume: any): void {
    resume.id = new Date().getTime();
    this.resumes.push(resume);
    this.updateLocalStorage();
  }

  updateResume(id: number, updatedResume: any): void {
    const index = this.resumes.findIndex(r => r.id === id);
    if (index !== -1) {
      this.resumes[index] = updatedResume;
      this.updateLocalStorage();
    }
  }

  deleteResume(id: number): void {
    this.resumes = this.resumes.filter(r => r.id !== id);
    this.updateLocalStorage();
  }

  private updateLocalStorage(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('resumes', JSON.stringify(this.resumes));
    }
}
}
