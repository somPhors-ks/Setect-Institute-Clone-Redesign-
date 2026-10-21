import { Component } from '@angular/core';

@Component({
  selector: 'app-facilities',
  imports: [],
  templateUrl: './facilities.html',
})
export class Facilities {
  rooms: any = [
    {
      id: 1,
      roomName: 'LECTURE ROOMS',
      desc: 'Lecture rooms are equip with air-cons and LCD projector to provide the best learning aids available to the students. The computer in the Lecture are also connected to the Internet and academy networking for most effective learning.',
      images: [{ imageUrl: 'Images/lecture_room1.jpg' }, { imageUrl: 'Images/lecture_room2.jpg' }],
    },
    {
      id: 2,
      roomName: 'COMPUTER ROOMS',
      desc: 'Our computer labs are equipped with air conditioning to provide student an comfortable and spacious learning environment. All computers are equipped with the latest computer technology to provide our students with the best training aids.',
      images: [{ imageUrl: 'Images/lab_room1.jpg' }, { imageUrl: 'Images/lab_room2.jpg' }],
    },
    {
      id: 3,
      roomName: 'DESIGN ROOMS',
      desc: 'The design rooms are equipped with different traditional and modern tools in different rooms for the different units learning purposes.',
      images: [{ imageUrl: 'Images/design_room1.jpg' }, { imageUrl: 'Images/design_room2.jpg' }],
    },
    {
      id: 4,
      roomName: 'IT ROOM',
      desc: 'Students who are interested to learn more on repairs and networking can do so in the IT room after school hour. We provide free repair services (excluding parts) to all students.',
      images: [{ imageUrl: 'Images/it_room1.jpg' }, { imageUrl: 'Images/it_room2.jpg' }],
    },
    {
      id: 5,
      roomName: 'Library ROOM',
      desc: 'Our library provides students with a comfortable and cooling environment with approximately 5000 books and magazines. These books are purchase externally from Singapore, Thailand, USA and Australia. With the modern technology, e-books are also available for the students.',
      images: [{ imageUrl: 'Images/library1.jpg' }, { imageUrl: 'Images/library2.jpg' }],
    },
    {
      id: 6,
      roomName: 'CANTEEN',
      desc: 'We have a canteen at the roof top for all staff, lecturers and students. The environment is clean and the food is nice and affordable.',
      images: [{ imageUrl: 'Images/canteen1.jpg' }, { imageUrl: 'Images/canteen2.jpg' }],
    },
    {
      id: 7,
      roomName: 'CAR PARK',
      desc: 'We have a basement car park that can cater to thousand of motorcycles, bicycles and cars.',
      images: [{ imageUrl: 'Images/packing1.jpg' }, { imageUrl: 'Images/packing2.jpg' }],
    },
  ];
}
