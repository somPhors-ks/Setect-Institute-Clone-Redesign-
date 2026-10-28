import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  imports: [],
  templateUrl: './contact-us.html',
})
export class ContactUs {
  contactItems: any = [
    {
      id: 1,
      icon: 'andrsrxn--message-face-smile',
      titleText: 'Chat to us',
      desc: 'Speak to our friendly team.',
      btnTitle: 'Chat to us',
    },
    {
      id: 2,
      icon: 'ci--chat-conversation-circle',
      titleText: 'Chat to support',
      desc: 'We are here to help.',
      btnTitle: 'Chat to support',
    },
    {
      id: 3,
      icon: 'basil--location-outline',
      titleText: 'Visit us',
      desc: 'Visit our office.',
      btnTitle: 'Visit us',
    },
    {
      id: 4,
      icon: 'ant-design--phone-outlined',
      titleText: 'Call us',
      desc: 'Mon-Sat, 7am-8pm',
      btnTitle: 'Call us',
    },
  ];
}
