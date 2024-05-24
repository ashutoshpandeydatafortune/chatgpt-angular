import { Component } from '@angular/core';
import { OpenaiService } from 'src/app/services/openai.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  userInput: string = '';
  chatResponse: string = '';

  constructor(private openaiService: OpenaiService) {}

  async sendMessage() {
    if (this.userInput.trim() === '') {
      return;
    }

    try {
      this.chatResponse = 'Thinking...';
      const response = await this.openaiService.getChatResponse(this.userInput);
      this.chatResponse = response;
    } catch (error) {
      this.chatResponse = 'Error fetching response. Please try again.';
    }
  }
}
