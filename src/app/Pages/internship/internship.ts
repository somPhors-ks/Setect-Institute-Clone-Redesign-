import { Component } from '@angular/core';

@Component({
  selector: 'app-internship',
  imports: [],
  templateUrl: './internship.html',
})
export class Internship {
  majorItems: any = [
    {
      id: 1,
      logo: 'Images/misLogo.png',
      majorName: 'Management Information System',
      image: [
        { imageUrl: 'Images/Student_internship1.jpg' },
        { imageUrl: 'Images/Student_internship2.jpg' },
        { imageUrl: 'Images/Student_internship3.jpg' },
        { imageUrl: 'Images/Student_internship4.jpg' },
      ],
    },
    {
      id: 1,
      logo: 'Images/designLogo.png',
      majorName: 'Design',
      image: [
        { imageUrl: 'Images/Student_internship5.jpg' },
        { imageUrl: 'Images/Student_internship6.jpg' },
        { imageUrl: 'Images/Student_internship7.jpg' },
        { imageUrl: 'Images/Student_internship8.jpg' },
      ],
    },
    {
      id: 1,
      logo: 'Images/bitLogo.png',
      majorName: 'Business Information Technology',
      image: [
        { imageUrl: 'Images/Student_internship9.jpg' },
        { imageUrl: 'Images/Student_internship10.jpg' },
        { imageUrl: 'Images/Student_internship11.jpg' },
        { imageUrl: 'Images/Student_internship12.jpg' },
      ],
    },
  ];
}
