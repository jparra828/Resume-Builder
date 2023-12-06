import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  aboutData = {
    title: "About Resume Builder",
    description: {
      intro: "This resume builder project is developed by Joshua Parra-Lam",
      purposes: [
        "Easy and quick resume creation",
        "User-friendly interface",
        "Customizable templates"
      ],
      outro: "Explore the features and create your professional resume in minutes!"
    },
    links: [
      { name: "LinkedIn", href: "https://www.linkedin.com/in/joshua-parra-lam/" }
    ]
  };

  profilePhotoUrl = 'flick.JPG';
}
