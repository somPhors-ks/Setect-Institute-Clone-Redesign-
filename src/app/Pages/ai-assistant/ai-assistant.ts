import { Component } from '@angular/core';
import { Sidebar } from '../../Components/sidebar/sidebar';
import { AiChat } from '../../Components/ai-chat/ai-chat';

@Component({
  selector: 'app-ai-assistant',
  imports: [Sidebar, AiChat],
  templateUrl: './ai-assistant.html',
})
export class AiAssistant {}
