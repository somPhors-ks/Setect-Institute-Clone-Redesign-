import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
})
export class Sidebar {
  @Output() collapsed = new EventEmitter<boolean>();
  setCollapsed: boolean = true;

  menuItems: any = [
    {
      id: 1,
      label: 'New Chat',
      icon: 'carbon--add',
    },
    {
      id: 2,
      label: 'Image',
      icon: 'akar-icons--image',
    },
    {
      id: 3,
      label: 'Library',
      icon: 'clarity--library-line',
    },
    {
      id: 4,
      label: 'Schedule',
      icon: 'akar-icons--schedule',
    },
  ];

  setCollasedSidebar(): any {
    this.collapsed.emit(this.setCollapsed);
    console.log(this.setCollapsed);
  }
}
