import { Component } from '@angular/core';

@Component({
  selector: 'app-community',
  imports: [],
  templateUrl: './community.html',
})
export class Community {
  communityItems: any = [
    {
      id: 1,
      count: 10000,
      name: 'Active Students',
      iconName: 'hugeicons--students',
    },
    {
      id: 2,
      count: 10,
      name: 'Programs',
      iconName: 'cil--school',
    },
    {
      id: 3,
      count: 1,
      name: 'Institutes',
      iconName: 'ep--school',
    },
    {
      id: 4,
      count: 20,
      name: 'Year Legacy',
      iconName: 'hugeicons--internet',
    },
  ];
}
