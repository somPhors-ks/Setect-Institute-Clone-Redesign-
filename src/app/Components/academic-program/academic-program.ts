import { Component } from '@angular/core';

@Component({
  selector: 'app-academic-program',
  imports: [],
  templateUrl: './academic-program.html',
})
export class AcademicProgram {
  programs: any = [
    {
      id: 1,
      programImage: 'Images/misProgram.jpg',
    },
    {
      id: 2,
      programImage: 'Images/microtikProgram.jpg',
    },
    {
      id: 3,
      programImage: 'Images/designProgram.jpg',
    },
    {
      id: 4,
      programImage: 'Images/bitProgram.jpg',
    },
  ];
}
