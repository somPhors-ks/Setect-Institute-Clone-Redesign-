import { Component } from '@angular/core';

@Component({
  selector: 'app-master-degree',
  imports: [],
  templateUrl: './master-degree.html',
})
export class MasterDegree {
  areaFocusSubject: any = [
    {
      id: 1,
      name: 'Business Management',
      icon: 'carbon--business-processes',
    },
    {
      id: 2,
      name: 'Database Administration',
      icon: 'bi--database-gear',
    },
    {
      id: 3,
      name: 'Application Development',
      icon: 'eos-icons--application-outlined',
    },
    {
      id: 4,
      name: 'ANetworking Technology',
      icon: 'carbon--network-4',
    },
  ];
}
