import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  aboutData = {
    title: "About Resumake",
    description: {
      intro: "This resume maker project is developed by Joshua Parra-Lam",
      purposes: [
        "Easy and quick resume creation",
        "User-friendly interface",
        "Downloadable PDF resume!!"
      ],
      outro: "Explore the features and create your professional resume in minutes!"
    },
    links: [
      { name: "LinkedIn", href: "https://www.linkedin.com/in/joshua-parra-lam/" }
    ]
  };

  profilePhotoUrl = 'assets/flick.JPG';
}
