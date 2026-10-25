import { Component, HostListener, OnInit } from '@angular/core';
import { Sidebar } from '../../Components/sidebar/sidebar';
import { AiChat } from '../../Components/ai-chat/ai-chat';
import { Header } from '../../Components/header/header';
import { Navbar } from '../../Components/navbar/navbar';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-ai-assistant',
  imports: [Sidebar, AiChat, Header, Navbar, NgClass],
  templateUrl: './ai-assistant.html',
})
export class AiAssistant implements OnInit {
  getDataCollapsed: boolean = false;

  getCollapsed(data: boolean) {
    this.getDataCollapsed = data;
  }

  openSideBar(): any {
    this.getDataCollapsed = false;
  }

  public screenWidth!: number;
  public screenHeight!: number;

  ngOnInit() {
    this.getScreenSize();
  }

  @HostListener('window:resize')
  onResize() {
    this.getScreenSize();
  }

  private getScreenSize() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    if (this.screenWidth <= 1200) {
      this.getDataCollapsed = true;
    } else {
      this.getDataCollapsed = false;
    }
  }
}
