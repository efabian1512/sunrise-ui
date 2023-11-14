import { Injectable } from '@angular/core';
import { Message } from 'src/app/models/message.model';
import { HttpClient } from '@angular/common/http';
import { Endpoints } from 'src/app/constants/endpoints';



@Injectable({
  providedIn: 'root'
})
export class ContactService {
  messageUrl = Endpoints.MESSAGES_API;

  constructor(private http: HttpClient) { }

  getMessages() {
    return this.http.get(this.messageUrl);
  }
  
  saveMessage(message: any) {
    message.isRead = false;

    return this.http.post(this.messageUrl, message);
  }
}
