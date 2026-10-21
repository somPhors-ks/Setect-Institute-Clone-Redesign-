import { Component } from '@angular/core';

@Component({
  selector: 'app-news-events',
  imports: [],
  templateUrl: './news-events.html',
})
export class NewsEvents {
  eventItems: any = [
    {
      id: 1,
      imageUrl: 'Images/graduation1.jpg',
    },
    {
      id: 2,
      imageUrl: 'Images/graduation2.jpg',
    },
    {
      id: 3,
      imageUrl: 'Images/graduation3.jpg',
    },
    {
      id: 4,
      imageUrl: 'Images/graduation4.jpg',
    },
    {
      id: 5,
      imageUrl: 'Images/graduation5.jpg',
    },
    {
      id: 6,
      imageUrl: 'Images/graduation6.jpg',
    },
    {
      id: 7,
      imageUrl: 'Images/graduation7.jpg',
    },
  ];
}
