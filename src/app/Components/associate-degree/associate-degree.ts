import { Component } from '@angular/core';

@Component({
  selector: 'app-associate-degree',
  imports: [],
  templateUrl: './associate-degree.html',
})
export class AssociateDegree {
  assCourse: any = [
    {
      id: 1,
      name: 'Management Information System',
      imageHeader: 'Images/ASS_MISHeader.jpg',
      imgPrice: [
        {
          imageUrl: 'Images/ASS_MISPrice1.jpg',
        },
        {
          imageUrl: 'Images/ASS_MISPrice2.jpg',
        },
        {
          imageUrl: 'Images/ASS_MISPrice3.jpg',
        },
        {
          imageUrl: 'Images/ASS_MISPrice4.jpg',
        },
      ],
    },
    {
      id: 1,
      name: 'Design',
      imageHeader: 'Images/ASS_DesignHeader.jpg',
      imgPrice: [
        {
          imageUrl: 'Images/ASS_DesignPrice1.jpg',
        },
        {
          imageUrl: 'Images/ASS_DesignPrice2.jpg',
        },
        {
          imageUrl: 'Images/ASS_DesignPrice3.jpg',
        },
        {
          imageUrl: 'Images/ASS_DesignPrice4.jpg',
        },
      ],
    },
  ];
}
