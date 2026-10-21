import { Component } from '@angular/core';

@Component({
  selector: 'app-bridging-course',
  imports: [],
  templateUrl: './bridging-course.html',
})
export class BridgingCourse {
  bridgingItems: any = [
    {
      id: 1,
      courseName: 'MANAGEMENT INFORMATION SYSTEM',
      courseImage: [{ imageUrl: 'Images/Br_MIS1.jpg' }, { imageUrl: 'Images/Br_MIS2.jpg' }],
    },
    {
      id: 2,
      courseName: 'DESIGN',
      courseImage: [{ imageUrl: 'Images/Br_Design1.jpg' }, { imageUrl: 'Images/Br_Design2.jpg' }],
    },
  ];
}
