import { Component} from '@angular/core';

import { ChatService } from "../../services/chat.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent {

  constructor( public _chatService:ChatService) { }

  ingresar( proveedor: string){
    this._chatService.login(proveedor);

  }


}
