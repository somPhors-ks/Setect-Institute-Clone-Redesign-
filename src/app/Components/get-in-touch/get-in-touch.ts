import { Component } from '@angular/core';

@Component({
  selector: 'app-get-in-touch',
  imports: [],
  templateUrl: './get-in-touch.html',
})
export class GetInTouch {
  getInTouchItems: any = [
    {
      id: 1,
      icon: 'basil--location-outline',
      name: 'Address',
      desc: 'No. 86A, Street 110, Russian Federation Boulevard, Sangkat Teuk Laak I, Khan Toul Kork, Phnom Penh, Cambodia',
    },
    {
      id: 2,
      icon: 'ant-design--phone-outlined',
      name: 'Phone',
      desc: 'Tel / Fax: 023 880612,  Mobile: 010 880612, 011 600619, 012 395190, 013 880612',
    },
    {
      id: 3,
      icon: 'griddy-icons--email-filled',
      name: 'Email',
      desc: 'info@setecu.com',
    },
  ];
}
