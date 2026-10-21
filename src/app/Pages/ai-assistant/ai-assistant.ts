import { Component } from '@angular/core';
import { Sidebar } from '../../Components/sidebar/sidebar';
import { AiChat } from '../../Components/ai-chat/ai-chat';
import { Header } from '../../Components/header/header';
import { Navbar } from '../../Components/navbar/navbar';

@Component({
  selector: 'app-ai-assistant',
  imports: [Sidebar, AiChat, Header, Navbar],
  templateUrl: './ai-assistant.html',
})
export class AiAssistant {}
