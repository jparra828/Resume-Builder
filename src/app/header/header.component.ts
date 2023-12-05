import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  links = [
    { name: 'About', path: '/about' },
    { name: 'Resume Make', path: '/resume-make' },
    { name: 'Resumes', path: '/resumes' }
  ];

}
