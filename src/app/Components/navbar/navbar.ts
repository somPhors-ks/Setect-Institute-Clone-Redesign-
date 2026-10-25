import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
})
export class Navbar {
  navItem: any = [
    {
      id: 1,
      routeName: '/home',
      name: 'Home',
    },
    {
      id: 2,
      routeName: '/academic',
      name: 'Academic',
    },
    {
      id: 3,
      routeName: '/aboutUs',
      name: 'About Us',
    },
    {
      id: 4,
      routeName: '/internship',
      name: 'Internship',
    },
    {
      id: 5,
      routeName: '/facilities',
      name: 'Facilities',
    },
    {
      id: 6,
      routeName: '/structure',
      name: 'Structure',
    },
    {
      id: 7,
      routeName: '/aiAssistant',
      name: 'AI Assistant',
    },
  ];
}
